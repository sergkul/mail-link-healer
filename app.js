const inboxLink = document.getElementById('mailbox:unreadEmails:link'); // ссылка на Входящие
const composeLink = document.getElementById('mailbox:write_letter'); // ссылка "Написать письмо"

if (inboxLink && composeLink) {
	// если ссылки есть на странице
	// удаляем у них атрибут 'target'
	inboxLink.removeAttribute('target');
	composeLink.removeAttribute('target');
}
