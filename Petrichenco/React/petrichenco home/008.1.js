'use script';
  let money = prompt('Ваш бюджет на месяц?');
  let time = prompt('Введите дату в формате YYYY-MM-DD');
  
 var money1 = prompt('Статья расходов №1 в этом месяце');
  let cost1 = prompt('Стоимость');
  
  let money2 = prompt('Статья расходов №1 в этом месяце');
  let cost2 = prompt('Стоимость');
  
    let appData = {
		// budget- ключ
		// money- значение (на самом деле money вводит пользователь.
		// Получается, к примеру, 10000. 
		// Эта пара выглядит:  
		// budget:10000
		//)
		budget: money,
		timeData: time,
		 expenses: {
		},
		 optionalExpenses: {
			
		},
		 income: [],
		savings: false
	};


// Нужно создать новые элементы которых не было в объекте
// Когда пользователь вводит в окошке по запросу статью расходов money1="produkty"
// а цену const1 = 5000, записывая appData.expenses[money1]=+cost1,
// подставляя значения money1="produkty" и cost1=5000, получаем:
// appData.expenses["produkty"]=5000;
// Т.е. создаем новую пару ключ/значение в объекте expenses:
// produkty:5000
// + - для преобразованию к числу.


  appData.expenses[money1]=+cost1;
  appData.expenses[money2]=+cost2;
  
  // В итоге получается, например
  // expenses: {
  // produkty:5000,
  // развлечения:1000   
  //		}
  
  
  
  //Когда надо изменить имеющиеся элементы в объекте
 // appData.budget=5000;
 // appData["budget"]=7000;
	console.log (appData);

// Выводим статью расходов money1 (ключ объекта expenses) и величину расходов 
// appData.expenses[money1] (значение для этого ключа объекта)
// Поскольку money1="produkty" (например), фактически выводится:
// alert("Статья расходов "+ "produkty"+ " : " + appData.expenses["produkty"]);
	
	
	alert("Статья расходов "+ money1+ " : "+ Math.round(appData.expenses[money1]/30) );
    alert("Статья расходов "+ money2+ " : "+ Math.round(appData.expenses[money2]/30) );


// Можно вывести все ключи и значения объекта в цикле,
// но это тема для дальнейшего изучения- об этом в дальнейшем расскажут	
//for (let key in  appData.expenses  ) {
//alert( key );   // ключ
//alert( appData.expenses[key] );  // значение для ключа
//	}	
	
// Создать респозиторий(место для хранения) на https://github.com/ Например, 
// 	https://github.com/marina18061987/public
// Для этого надо сначала зарегистрироваться на сайте  https://github.com/ под именем,
// например, sasha-is-permi (sing up), подтвердить свою почту.
// А затем создать место хранения- нажать на New в профиле, завести Respository Name
// (выбрать- Public(открытый) или Private (закрытый) и нажать Create Respository )
 
 
//git init
//git add -A
//git commit -m "first commit"
//git remote add origin https://github.com/marina18061987/public
//git push -u origin master
 
 
 // Изменили файлы на рабочем компьютере. Затем отправим обратно на github изменения
//git add -A
//git commit -m "second commit"
//git push
 
// Если нет Visual studio code- можно загрузить прямо с github.com,
// зайдя в созданный профиль, затем  uploading an existing file (загрузить существующий файл),
// choose your files (выберите ваши файлы), затем нажать Commit changes (записать изменения)
// Файлы загрузились в респозиторий https://github.com/sasha-is-permi/public

//	let x = 5; 
//	alert( x++ ); 
	
//	let abc = [ ] + false - null + true;
//	console.log(abc);
	
	let y = 1; 
	let x = y = 2; 
	alert(x); 
	console.log('x=',x);
	console.log('y=',y);
	
	 console.log('[ ] + 1 + 2',[ ] + 1 + 2);
	
	