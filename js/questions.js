// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: 'HTML-ის სრული სახელია: ',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    numb: 2,
    question: 'აირჩიე სწორი HTML ელემენტი ყველაზე დიდი heading-თვის',
    answer: '<h1>',
    options: ['&lt;head&gt;', '&lt;h6&gt;', '&lt;h1&gt;', '&lt;heading&gt;'],
  },

  {
    numb: 3,
    question: 'რომელია სწორი HTML ელემენტი line break-ის აღსანიშნად',
    answer: '<br>',
    options: ['&lt;break&gt;', '&lt;lb&gt;', '&lt;br&gt;', '&lt;bl&gt;'],
  },
  {
    numb: 4,
    question: 'როგორ იწერება კომენტარი HTML-ში?',
    answer: '<!-- ეს არის კომენტარი -->',
    options: [
      '// ეს არის კომენტარი',
      '/* ეს არის კომენტარი */',
      '&lt;!-- ეს არის კომენტარი --&gt;',
      '** ეს არის კომენტარი **',
    ],
  },
  {
    numb: 5,
    question: 'რომელია სწორი ჩანაწერი ლინკის შექმნისათვის?',
    answer: '<a href="http://www.google.com">google.com<a>',
    options: [
      '&lt;a url="http://www.google.com"&gt;google.com&lt;a&gt;',
      '&lt;a href="http://www.google.com"&gt;google.com&lt;a&gt;',
      '&lt;a&gt;google.com&lt;a&gt;',
      '&lt;a name="http://www.google.com"&gt;google.com&lt;a&gt;',
    ],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
    numb: 6,
    question: 'როგორ შეგვიძლია გავხსნათ ლინკი ახალი ფანჯარაში?',
    answer: '<a href=url target=_blank>',
    options: [
      '&lt;a href=url new&gt;',
      '&lt;a href=url target=_blank&gt;',
      '&lt;a href=url target=_new&gt;',
      '&lt;a href=url target=new&gt;',
    ],
  },
  {
    numb: 7,
    question: 'რომელი თაგი არ არსებობს?',
    answer: '<h8>',
    options: ['&lt;h1&gt;', '&lt;h8&gt;', '&lt;h4&gt;', '&lt;h5&gt;'],
  },
  {
    numb: 8,
    question: 'რომელი ელემენტი არ გვხვდება HTML-ში?',
    answer: 'fontSize',
    options: ['alt', 'div', 'fontSize', 'id'],
  },
  {
    numb: 9,
    question:
      'რომელია ის html-ის ატრიბუტი, რომელიც გვიჩვენებს სურათის წყაროს სურათის ლინკში?',
    answer: 'src',
    options: ['src', 'href', 'link', 'location'],
  },
  {
    numb: 10,
    question: 'რომელი თაგით აღინიშნება დაუნომრავი ლისტი?',
    answer: '<ul>',
    options: ['&lt;ul&gt;', '&lt;ol&gt;', '&lt;li&gt;', '&lt;th&gt;'],
  },
  {
    numb: 11,
    question: '&lt;br&gt; - თაგი აღნიშნავს: ',
    answer: 'ხაზის გამოტოვებას',
    options: [
      'ცარიელ სივრცეს',
      'ხაზის გამოტოვებას',
      'სიტყვის გამოტოვებას',
      'პარაგრაფის გამოტოვებას',
    ],
  },
  {
    numb: 12,
    question:
      'ჩამოთვლილთაგან რომელი თაგი გამოიყენება იმისათვის, რომ მომხმარებელმა შეიტანოს დიდი ზომის ინფორმაცია',
    answer: '<textarea>',
    options: [
      '&lt;textarea&gt;',
      '&lt;button&gt;',
      '&lt;a&gt;',
      '&lt;label&gt;',
    ],
  },
  {
    numb: 13,
    question: 'HTML კომენტარები იწყება &lt;!-- და მთავრდება --&gt;',
    answer: 'სიმართლეა',
    options: ['სიმართლეა', 'არ არის სიმართლე', '&lt;h1&gt;', '&lt;head&gt;'],
  },
  {
    numb: 14,
    question: 'რომელი სიმბოლო გამოიყენება თაგის დახურვისას?',
    answer: '/',
    options: ['&lt;', '/', ')', '*'],
  },
  {
    numb: 15,
    question: 'ჩამოთვლილთაგან რომელია table-ის ელემენტები?',
    answer: '<table><tr><td>',
    options: [
      '&lt;table&gt;&lt;tr&gt;&lt;tt&gt;',
      '&lt;table&gt;&lt;tr&gt;&lt;td&gt;',
      '&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;',
      '&lt;thead&gt;&lt;body&gt;&lt;tr&gt;',
    ],
  },
  {
    numb: 16,
    question:
      'რომელია სწორი HTML ჩანაწერი, იმისათვის, რომ შევქმნათ - checkbox?',
    answer: '<input type="checkbox">',
    options: [
      '&lt;check&gt;',
      '&lt;input type="checkbox"&gt;',
      '&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;',
      '&lt;thead&gt;&lt;body&gt;&lt;tr&gt;',
    ],
  },
  {
    numb: 17,
    question: 'რომელია სწორი HTML ჩანაწერი, იმისათვის, რომ შევიტანოთ ტექსტი?',
    answer: '<input type="text">',
    options: [
      '&lt;textinput type="text"&gt;',
      '&lt;input type="text"&gt;',
      '&lt;input type="textfield"&gt;',
      '&lt;textfield&gt;',
    ],
  },
  {
    numb: 18,
    question:
      'რომელი HTML-ის ელემენტია იმის ალტერნატივა, რომ ბრაუზერში სურათის არგამოჩენის შემთხვევაში, გამოვიდეს რაიმე სახის წარწერა?',
    answer: 'alt',
    options: ['longdesc', 'alt', 'src', 'title'],
  },
  {
    numb: 19,
    question: 'რომელი DOCTYPE არის სწორი HTML5 - სთვის?',
    answer: '<!DOCTYPE html>',
    options: [
      '&lt;!DOCTYPE HTML5&gt;',
      '&lt;!DOCTYPE HTML PUBLIC" -//W3C//DTD HTML 5.0&gt;',
      '&lt;!DOCTYPE html&gt;',
    ],
  },
  {
    numb: 20,
    question:
      'რომელი ელემენტი გამოიყენება იმისათვის, რომ input field-ში გამოჩნდეს მკრთლად ის, რაც უნდა შევიყვანოთ?',
    answer: 'placeholder',
    options: ['required', 'formvalidate', 'input', 'placeholder'],
  },
  {
    numb: 21,
    question: 'რომელი HTML ელემენტი გამოიყენება navigation ლინკებისთვის?',
    answer: '<nav>',
    options: [
      '&lt;navigation&gt;',
      '&lt;navigate',
      '&lt;nav&gt;',
      '&lt;navigat&gt;',
    ],
  },
  {
    numb: 22,
    question:
      'რომელი ელემენტი მოიცავს head-ის ელემენტებს, და ასევე დოკუმენტის სათაურს?',
    answer: '<head></head>',
    options: [
      '&lt;title&gt;&lt;/title&gt;',
      '&lt;br&gt;&lt;/br&gt;',
      '&lt;head&gt;&lt;/head&gt;',
      '&lt;body&gt;&lt;/body&gt;',
    ],
  },
  {
    numb: 23,
    question:
      'რომელი თაგი განსაზღვრავს თავის და ბოლოს დაყოფას ცალკეულ section-ებთან მიმართებაში?',
    answer: '<div>',
    options: ['&lt;div&gt;', '&lt;meta&gt;', '&lt;img&gt;', '&lt;table&gt;'],
  },
  {
    numb: 24,
    question: 'რომელი თაგი გამოიყენება ლინკის მითითების დროს?',
    answer: '<a>',
    options: [
      '&lt;em&gt;',
      '&lt;blockquote&gt;',
      '&lt;strong&gt;',
      '&lt;a&gt;',
    ],
  },
  {
    numb: 25,
    question: 'რომელია სწორი ჩანაწერი background-color-ის დასამატებლად?',
    answer: '<body style="background-color: yellow">',
    options: [
      '&lt;body style="background-color: yellow"&gt;',
      '&lt;body style="background-color=yellow"&gt;',
      '&lt;body bg="yellow"&gt;',
      '&lt;background&gt;yellow&lt;background&gt;',
    ],
  },
  {
    numb: 26,
    question: 'href არის',
    answer: 'ლინკის წყარო',
    options: ['ლინკის წყარო', 'ლინკი', 'ორივე', 'არცერთი'],
  },
  {
    numb: 27,
    question: 'რა განსხვავებაა ღია და დახურულ თაგებს შორის?',
    answer: 'დახურულ თაგს წინ აქვს ნიშანი - /',
    options: [
      'ღია თაგს წინ აქვს ნიშანი - /',
      'დახურულ თაგს წინ აქვს ნიშანი - /',
      'განსხვავება არ არის',
      'ასეთი ნიშანი არცერთს არ აქვს',
    ],
  },
  {
    numb: 28,
    question: '&lt;body&gt; - ღია თაგია გამოსახული თუ დახურული?',
    answer: 'ღია',
    options: ['ღია', 'დახურული'],
  },
  {
    numb: 29,
    question: 'block ელემენტია: ',
    answer: 'ელემენტი, რომელიც იკავებს ბრაუზერის სრულ სივრცეს',
    options: [
      'ელემენტი, რომელიც იკავებს მცირე ადგილს',
      'ელემენტი, რომელიც იკავებს ბრაუზერის სრულ სივრცეს',
      'ორივე პასუხი სწორია',
      'არცერთი პასუხი არ არის სწორი',
    ],
  },
  {
    numb: 30,
    question: 'block ელემენტია: ',
    answer: '<p>',
    options: ['&lt;p&gt;', '&lt;a&gt;', '&lt;button&gt;', '&lt;b&gt;'],
  },
  {
    numb: 31,
    question: 'ჩამოთვლილთაგან რომელია inline ელემენტი? ',
    answer: '<a>',
    options: ['&lt;h1&gt;', '&lt;a&gt;', '&lt;hr&gt;', '&lt;ul&gt;'],
  },
  {
    numb: 32,
    question: 'id-ის მნიშვნელობა შემდეგნაირად შეიძლება განვმარტოთ:',
    answer:
      'id - შეიძლება მივანიჭოთ ნებისმიერ თაგს და მისი სახელის გამოყენება მხოლოდ ერთხელ შეგვიძლია',
    options: [
      'id - შეიძლება მივანიჭოთ ნებისმიერ თაგს და მისი სახელის გამოყენება მხოლოდ ერთხელ შეგვიძლია',
      'id - ს ერთი და იგივე სახელი შეიძლება მრავალჯერ მივანიჭოთ',
      'ორივე პასუხი სწორია',
      'არცერთი პასუხი არ არის სწორი',
    ],
  },
  {
    numb: 33,
    question: 'class და id ერთი და იგივეა',
    answer: 'არ არის სიმართლე',
    options: ['სიმართლეა', 'არ არის სიმართლე'],
  },
  {
    numb: 34,
    question: "ლისტის რომელ ტიპს მიეკუთვნება '1'?",
    answer: '<ol>',
    options: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;li&gt;', '&lt;tr&gt;'],
  },
  {
    numb: 35,
    question: 'აირჩიე სწორი განლაგება',
    answer: '<nav><ul><li>',
    options: [
      '&lt;nav&gt;&lt;ul&gt;&lt;li&gt;',
      '&lt;ul&gt;&lt;li&gt;&lt;nav&gt;',
      '&lt;li&gt;&lt;nav&gt;&lt;ul&gt;',
      '&lt;li&gt;&lt;ul&gt;&lt;nav&gt;',
    ],
  },
  {
    numb: 36,
    question: 'nbsp-ის დანიშნულებაა',
    answer: 'ადგილის გამოტოვება',
    options: [
      'ადგილის გამოტოვება',
      'პარაგრაფის გამოტოვება',
      'ხაზის გამოტოვება',
      'არცერთი პასუხი არ არის სწორი',
    ],
  },
  {
    numb: 37,
    question: 'რომელია სწორი HTML ჩანაწერი, იმისათვის, რომ შევიტანოთ ასაკი?',
    answer: '<input type="number">',
    options: [
      '&lt;textinput type="age"&gt;',
      '&lt;input type="age"&gt;',
      '&lt;input type="number"&gt;',
      '&lt;numberinput type="number"&gt;',
    ],
  },
  {
    numb: 38,
    question:
      'რომელია სწორი HTML ჩანაწერი, იმისათვის, რომ შევიტანოთ დაბადების თარიღი?',
    answer: '<input type="date">',
    options: [
      '&lt;textinput type="birthdate"&gt;',
      '&lt;input type="birthdate"&gt;',
      '&lt;input type="date"&gt;',
      '&lt;numberinput type="date"&gt;',
    ],
  },
  {
    numb: 39,
    question: "რომელი ლისტის ტიპია - 'I'",
    answer: '<ol>',
    options: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;li&gt;', '&lt;არცერთი&gt;'],
  },
  {
    numb: 40,
    question: "რომელი ლისტის ტიპია - 'A'",
    answer: '<ol>',
    options: ['&lt;ul&gt;', '&lt;ol&gt;', '&lt;li&gt;', '&lt;td&gt;'],
  },
  {
    numb: 41,
    question: 'CSS-ის სრული სახელია: ',
    answer: 'Cascading Style Sheets',
    options: [
      'Computer Style Sheets',
      'Colorful Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
    ],
  },
  {
    numb: 42,
    question: 'HTML-ის და CSS-ის დამაკავშირებელი ლინკია: ',
    answer: '<link rel=stylesheet" type="text/css" href="mystyle.css">',
    options: [
      '&lt;link rel=stylesheet" type="text/css" href="mystyle.css"&gt;',
      '&lt;stylesheet&gt;mystyle.css&lt;stylesheet&gt;',
      '&lt;style src="mystyle.css"&gt;',
      'არცერთი არ არის სწორი',
    ],
  },
  {
    numb: 43,
    question: 'რომელია სწორი CSS სინტაქსი?',
    answer: 'body{color: black;}',
    options: [
      '{body; color: black;}',
      '{body: color=black;}',
      'body: color=black;',
      'body{color: black;}',
    ],
  },
  {
    numb: 44,
    question: 'როგორ იწერება CSS-ში კომენტარი?',
    answer: '/* this is a comment */',
    options: [
      '?this is a comment',
      '// this is a comment',
      '// this is a comment //',
      '/* this is a comment */',
    ],
  },
  {
    numb: 45,
    question: 'როგორ დაამატებ background-color-ს ყველა h1 თაგს?',
    answer: 'h1 {background-color: #fff;}',
    options: [
      'all.h1 {background-color: #fff;}',
      'h1 {background-color: #fff;}',
      'h1 {background-color=#fff;}',
      'h1.all {background-color: #fff;}',
    ],
  },
  {
    numb: 46,
    question: 'ტექსტის ზომის შესაცვლელად ვიყენებთ: ',
    answer: 'font-size',
    options: ['text-style', 'font-size', 'text-size', 'text-style'],
  },
  {
    numb: 47,
    question: 'როგორ შეგვიძლია გამოვაჩინოთ ლინკი ქვედა ხაზის გარეშე?',
    answer: 'a {text-decoration: none}',
    options: [
      'a {text-decoration: none}',
      'a {underline: none}',
      'a {decoration: no-underline}',
      'a {text-decoration: no-underline}',
    ],
  },
  {
    numb: 48,
    question:
      'რომელი პარამეტრის გამოყენებით შეგვიძლია დავიწყოთ სიტყვა დიდი ასოთი?',
    answer: 'text-trasnform: capitalize;',
    options: [
      'trasnform: capitalize;',
      'text-trasnform: capitalize;',
      'ასეთ რამეს CSS-ში ვერ გავაკეთებთ',
      'text-style: capitalize;',
    ],
  },
  {
    numb: 48,
    question: 'როგორ დაამატებ ჩრდილს ელემენტს? ',
    answer: 'box-shadow: 10px 10px 5px grey;',
    options: [
      'box-shadow: 10px 10px 5px grey;',
      'shadow-right: 10px shadow-bottom: 10px;',
      'shadow-color: grey;',
      'alpha-effect[shadow]: 10px 10px 5px grey;',
    ],
  },
  {
    numb: 49,
    question: 'როგორ ვაბრუნოთ ობიექტი css-ის პარამეტრების გამოყენებით?',
    answer: 'transform: rotate(30deg);',
    options: [
      'object-rotation: 30deg;',
      'transform: rotate(30deg);',
      'rotate-object: 30deg;',
      'transform: rotate-30deg-clockwise;',
    ],
  },
  {
    numb: 50,
    question: 'როგორ შეგვიძლია ელემენტის ზომის შეცვლა/გაზრდა?',
    answer: 'transform: scale(2,4);',
    options: [
      'transform: scale(2,4);',
      'scale-object: 2,4;',
      'scale: (2,4);',
      'არცერთი არ არის სწორი',
    ],
  },
  {
    numb: 51,
    question: 'როგორ შეგვიძლია შევქმნათ transition ეფექტი CSS-ის გამოყენებით?',
    answer: 'transition: width 2s;',
    options: [
      'transition: width 2s;',
      'transition-duration: 2s; transition-effect: width;',
      'alpha-effect: transition (width,2s);',
      'არცერთი არ არის სწორი',
    ],
  },
  {
    numb: 52,
    question: 'რომელი ნაწილი აკლია კოდს? p{ text-shadow: 1px 1px 3px; }',
    answer: 'the color',
    options: [
      'the color',
      'the element',
      'the id name',
      'the text shadow height',
    ],
  },
  {
    numb: 52,
    question: 'როგორ შეგვიძლია background ზომის შეცვლა?',
    answer: 'background-size: 80px 60px;',
    options: [
      'background-size: 80px 60px;',
      'background-proportion: 80px 60px;',
      'talpha-effect: bg-resize 80px 60px;',
      'არცერთი არ არის სწორი',
    ],
  },
  {
    numb: 53,
    question: 'რომელ თაგს გამოხატავს ეს სიმბოლო - #',
    answer: 'id',
    options: ['class', 'id', 'tag', 'first'],
  },
  {
    numb: 54,
    question:
      'რომელი პარამეტრს გამოვიყენებთ იმისათვის, რომ გამოვყოთ სივრცე ელემენტებს შორის?',
    answer: 'margin',
    options: ['margin', 'spacing', 'padding', 'border'],
  },
  {
    numb: 55,
    question: 'ჩამოთვლილთაგან, რომელი გზით არ შეგვიძლია CSS-ის ჩაწერა?',
    answer: 'არცერთი მათგანი არ არის სწორი',
    options: [
      'inline',
      'external',
      'internal',
      'არცერთი მათგანი არ არის სწორი',
    ],
  },
  {
    numb: 56,
    question:
      'თუ გვინდა ელემენტის მოქცევა კონტეინერის მარჯვენა მხარეს, რომელ პარამეტრს გამოვიყენებთ?',
    answer: 'float:right;',
    options: [
      'display:right;',
      'float-right:0px;',
      'display-right:0px;',
      'float:right;',
    ],
  },
  {
    numb: 57,
    question:
      'რომელი პარამეტრი განსაზღვრავს background-image scroll იქნება თუ fixed?',
    answer: 'background-position',
    options: [
      'background-attachment',
      'background-color',
      ' background-repeat',
      'background-position',
    ],
  },
  {
    numb: 58,
    question: 'შეგვიძლია background-ის პარამეტრები, ყველა გავწეროთ ერთ ხაზზე',
    answer: 'სიმართლეა',
    options: ['სიმართლეა', 'არ არის სიმართლე'],
  },
  {
    numb: 59,
    question: 'როგორ შეგვიძლია მივწვდეთ flexbox-ის პარამეტრებს?',
    answer: 'display: flex',
    options: [
      'display: flex',
      'display: flexbox',
      'display: inline-flex',
      'display: box',
    ],
  },
  {
    numb: 60,
    question:
      'რომელ flex-ის პარამეტრს შეუძლია ერთი ხაზის ნაცვლად, რამდენიმეზე განალაგოს ელემენტები?',
    answer: 'flex-wrap',
    options: ['flex-wrap', 'flex-flow', 'flex-basis', 'display: flex'],
  },
  {
    numb: 61,
    question: 'როგორ შეგიძლია გაზარდო ზომაში flex-ის item-ები?',
    answer: 'flex-grow',
    options: [
      'flex-size',
      'flex-flow',
      'flex-grow',
      'ამის გაკეთება flex-ით შეუძლებელია',
    ],
  },
  {
    numb: 62,
    question: 'რას აკეთებს repeat() გრიდ-ში?',
    answer: 'repeat(size(ზომა), times(რამდენჯერ))',
    options: [
      'repeat(times, size)',
      'repeat(size)(times)',
      'repeat(size(ზომა), times(რამდენჯერ))',
      'repeat(size times)',
    ],
  },
  {
    numb: 63,
    question: 'როგორ შეგვიძლია სივრცის გამოყოფა grid-ის ელემენტებს შორის?',
    answer: 'grid-gap',
    options: ['margin', 'padding', 'grid-cell', 'grid-gap'],
  },
]