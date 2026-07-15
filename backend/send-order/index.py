import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header


def handler(event: dict, context) -> dict:
    '''Отправляет заявку с формы «Заказать» на почту pvsistema@mail.ru через SMTP mail.ru'''
    method = event.get('httpMethod', 'GET')

    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        data = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    name = (data.get('name') or '').strip()
    org = (data.get('org') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    msg = (data.get('msg') or '').strip()

    if not name or not (email or phone):
        return {
            'statusCode': 400,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Заполните имя и контакт (email или телефон)'}),
        }

    smtp_user = 'pvsistema@mail.ru'
    smtp_password = os.environ.get('MAILRU_SMTP_PASSWORD', '')

    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'SMTP не настроен'}),
        }

    body_text = (
        'Новая заявка с сайта ПВ-Система\n\n'
        f'Имя: {name}\n'
        f'Предприятие: {org or "—"}\n'
        f'Email: {email or "—"}\n'
        f'Телефон: {phone or "—"}\n'
        f'Тип предприятия / задача:\n{msg or "—"}\n'
    )

    letter = MIMEText(body_text, 'plain', 'utf-8')
    letter['Subject'] = Header('Заявка с сайта ПВ-Система', 'utf-8')
    letter['From'] = smtp_user
    letter['To'] = smtp_user
    if email:
        letter['Reply-To'] = email

    try:
        with smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=20) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, [smtp_user], letter.as_string())
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': {**cors, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'Не удалось отправить письмо: {str(e)}'}),
        }

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True}),
    }
