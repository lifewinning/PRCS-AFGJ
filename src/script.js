
document.addEventListener('DOMContentLoaded', function() {
          var gData
          var URL = "0AuIyGzi1-bBmdDdoWkZhOWN0aDEtU25kNXdhNkw5SUE"
          Tabletop.init( { key: URL, callback: showInfo, order: 'timeline', simpleSheet: true } )
  })

  function showInfo(data, tabletop){
        var gData = data;
        //handlebars template
        var source   = $("#WhatWeSaid").html();
        var template = Handlebars.compile(source);

        $.each(tabletop.data(), function(i, field) {
          var html = template(field);
          $("#content").append(html);
        
        });
        //filtering the data by category
        
        var filterDiv = document.getElementById('filterDiv');

        function filterByYear(data, category){
          var filterItem = document.getElementById('entry_1866359929');
          var filterList = [];
          var selectedItem = [filterItem.selectedIndex].value;
          console.log(selectedItem);
         data.forEach(function (element) {
          var projectType = element['year'].toLowerCase()
          if (projectType === filter.toLowerCase()) filterList.push(element)
          })
          return filterList
          }

        //by year
        var year2014is = Sheetsee.getMatches(gData, '2014', "year")
        var year2014 = ich.year2014({rows:year2014is}); 
        $('#year2014').html(year2014)

        var year2015is = Sheetsee.getMatches(gData, '2015', "year")
        var year2015 = ich.year2015({rows:year2015is}); 
        $('#year2015').html(year2015)

         var year2016is = Sheetsee.getMatches(gData, '2016', "year")
        var year2016 = ich.year2016({rows:year2016is}); 
        $('#year2016').html(year2016)
}   