module.exports ={
  title: 'EEE 3',
  description: 'Doc İnformation',

  themeConfig : {
      activeHeaderLinks: true, // Default: true
      nav:[
          {text: 'Nedir',link:'/'},
          {text: 'mikro8051',link:'/mikroislemciler/'},
          {text: 'About',link:'/info/'}
      ],
      sidebar: [
          {
              title:'Home',
              collapsable: false,
              path:'/'
          },
          {
              title: 'Mikro 8051',   // required
              path: '/mikroislemciler/',      // optional, which should be a absolute path.
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2,    // optional, defaults to 1
              children: [
                ['mikroislemciler/konu1','Çalışma Soruları 1'],
                ['mikroislemciler/konu2','Çalışma Soruları 2'],
              ]
            },
            {
              title: 'Oto Kontrol',
              children: [ /* ... */ ]
            }
      ]

      
  }
};