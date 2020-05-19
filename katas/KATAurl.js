function domainName(url) {
  var domain;
  
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  }
  else {
    domain = url.split('/')[0];
  }
  
 
  if (domain.indexOf("www.") > -1) { 
    domain = domain.split('www.')[1];
  }
  
  domain = domain.split(':')[0]; 
  domain = domain.split('?')[0]; 
  
  let domainName = []
   for (i = 0; i < domain.length ; i++)
   if(domain[i] !== ".") {
      domainName.push(domain[i])
   } else {
     break
   }
 
  return domainName.join('');
}


console.log(extractDomain("https://codepen.io/martinkrulltott/pen/GWWWQj"))