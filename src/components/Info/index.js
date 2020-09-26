import React from 'react';

export default () => {
	return (
		<div className='info'>
			<div className='info-box'>
				<div className='box'>
					<h1>Автосервис</h1>
					<div className='item'>
						Ремонт микроавтобусов и легковых автомобилей
					</div>
					<div className='item'>Подбор автозапчастей</div>
					<div className='item'>Ремонт подвески</div>
					<div className='item'>Замена ремней и цепей</div>
					<div className='item'>Полная замена узлов</div>
					<div className='item'>Капитальный ремонт двигателя</div>
					<div className='item'>Замена масел и фильтров</div>
					<div className='item'>Заправка кондиционера</div>
				</div>

				<div className='contacts'>
					<p>Минское шоссе 2</p>
					<a href='tel:+375296415425' className='number'>
						+375 29 641 54 25
					</a>
				</div>
			</div>
			<div className='info-box'>
				<div className='box'>
					<h1>Кузовной ремонт</h1>
					<div className='item'>Все виды кузовных работ</div>
					<div className='item'>Работаем со всеми страховыми компаниями</div>
					<div className='item'>Индивидуальный подход</div>
					<div className='item'>Многолетний опыт</div>
				</div>
				<div className='contacts'>
					<p>Северная 4а</p>
					<a href='tel:+375296315950' className='number'>
						+375 29 631 59 50
					</a>
				</div>
			</div>
		</div>
	);
};
