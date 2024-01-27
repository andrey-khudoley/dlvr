window.addEventListener('DOMContentLoaded', () => {
	/*===================================== 
	СОЗДАНИЕ НОВЫХ ЭЛЕМЕНТОВ ЛЕВОГО МЕНЮ 
	===================================== */

	// Добавление нового элемента перед каким-то элементом
	const newMenuItemBefore = (
		beforeBlockSelector,
		newMenuItemClass,
		newMenuItemTitle,
		newMenuItemLinkIcon,
		newMenuItemLink
	) => {
		const parentBlock = document.querySelector('.gc-account-user-menu'),
			elementBefore = document.querySelector(beforeBlockSelector);

		if (!parentBlock && !elementBefore) return;

		const newItem = document.createElement('li');
		newItem.classList.add('menu-item', newMenuItemClass);
		newItem.innerHTML = `
						<a href="${newMenuItemLink}" title="${newMenuItemTitle}">
							<img class="menu-item-icon" src="${newMenuItemLinkIcon}">
						</a>`;

		parentBlock.insertBefore(newItem, elementBefore);
	};

	// Добавление нового элемента после какого-то элемента
	const newMenuItemAfter = (
		beforeBlockSelector,
		newMenuItemClass,
		newMenuItemTitle,
		newMenuItemLinkIcon,
		newMenuItemLink
	) => {
		const parentBlock = document.querySelector('.gc-account-user-menu'),
			elementBefore = document.querySelector(beforeBlockSelector);

		if (!parentBlock && !elementBefore) return;

		const newItem = document.createElement('li');
		newItem.classList.add('menu-item', newMenuItemClass);
		newItem.innerHTML = `
							<a href="${newMenuItemLink}" title="${newMenuItemTitle}">
								<img class="menu-item-icon" src="${newMenuItemLinkIcon}">
							</a>`;

		parentBlock.insertBefore(newItem, elementBefore.nextSibling);
	};
	newMenuItemAfter(
		'.menu-item-teach',
		'menu-item-prolongation',
		'Продление',
		'https://fs.getcourse.ru/fileservice/file/download/a/63650/sc/337/h/78ab70ff977d2b1ff530b8ac0e901fad.png',
		'/prolongation'
	);

	/*===================================== 
	УСТАНОВКА АКТИВНОСТИ ПУНКТОВ НА ПОДМЕНЕННЫХ ССЫЛКАХ
===================================== */
	const changeActiveElelement = () => {
		setTimeout(() => {
			// Когда пользователь переходит в продление
			if (window.location.pathname.startsWith('/prolongation')) {
				$('.gc-account-user-menu li').removeClass('active');
				$('.gc-account-user-menu li.menu-item-prolongation').addClass('active');
				$('.gc-account-user-menu li.menu-item-prolongation img').attr(
					'src',
					'https://fs.getcourse.ru/fileservice/file/download/a/63650/sc/337/h/78ab70ff977d2b1ff530b8ac0e901fad.png'
				);
				$('.gc-account-user-menu li.menu-item-cms img').attr(
					'src',
					'/public/img/service/cms.png'
				);
			}
		}, 10);
	};
	changeActiveElelement();
});