





Highcharts.chart('container', {
    chart: {
      type: 'variablepie'
    },

   
   
    title: {
      text: '<p class="title-text"> Eagle <br> Construction Costs:<br>{Material + Labour}</p>',
        align: 'center',
        x: -20,
        y:130,
 
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'bottom',
      y: -250,
      useHTML:true,
   
      padding: 10,
    itemMarginBottom: 15,
      itemDistance: 100,
      itemStyle: {
          lineHeight: '14px',
            color: '#000000',
            fontWeight: 'normal',
     
      
      }  ,
      labelFormatter: function() {
        console.log(this.yData);
         return   '<span class="legend-value"> '+this.y+'%</span>'+'<span class="legend-title">'+this.name+'</span>';
      
  }
},
  

    tooltip: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        
    },
    backgroundColor: '#333333',
    borderColor:'#333333',
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}"></span> ' +
      ' <b>{point.y}%</b>'+'<b> {point.name}</b>'
        
    },

   
   series: [{
    size: '68%',
      minPointSize: 40,
      maxPointSize: 40,
      zMin:100,
      zMax:200,
      innerSize: '200%',
      center: ['45%', '40%'],
      sizeBy: 'radius',
      showInLegend: true,
      indexLabel: "{y%} {name}",
      name: 'Eagle Construction Costs :MATERIALS + LABOUR',
      
      data:[{
        
        name: 'Excavation',
        y: 57,
  
      }, {
        name: 'RCC Work',
        y: 12,
       
      }, {
        name: 'Masonary',
        y: 6,
       
      }, {
        name: 'Plaster',
        y: 7,
       
      }, {
        name: 'Flooring, skirting,dado & cladding, Counter works ',
        y: 5,
      
      }, {
        name: 'Wooden Works- Doors',
        y: 13,
      
      }, {
        name: 'Others',
        y: 3,
      
      }],
     
    }],
    
  })
  
  

    