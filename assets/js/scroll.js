const saTriggerMargin = 300;
			const saElementList = document.querySelectorAll('section.wrapper.style1');
			const saElementList2 = document.querySelectorAll('section.wrapper.style2');
			const saElementList3 = document.querySelectorAll('section.wrapper.style3');
			
	  
			const saFunc = function() {
			  for (const element of saElementList) {
				if (!element.classList.contains('show')) {
				  if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
					element.classList.add('show');
				  }
				}
			  }
			}
			const saFunc1 = function() {
			  for (const element2 of saElementList2) {
				if (!element2.classList.contains('show')) {
				  if (window.innerHeight > element2.getBoundingClientRect().top + saTriggerMargin) {
					element2.classList.add('show');
				  }
				}
			  }
			}
			const saFunc2 = function() {
			  for (const element3 of saElementList3) {
				if (!element3.classList.contains('show')) {
				  if (window.innerHeight > element3.getBoundingClientRect().top + saTriggerMargin) {
					element3.classList.add('show');
				  }
				}
			  }
			}
	  
			window.addEventListener('load', saFunc);
			window.addEventListener('scroll', saFunc);
			window.addEventListener('load', saFunc1);
			window.addEventListener('scroll', saFunc1);
			window.addEventListener('load', saFunc2);
			window.addEventListener('scroll', saFunc2);