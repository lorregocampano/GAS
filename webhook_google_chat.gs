/// This Script allow you to get a status webpage or get the daily dollar value using google apps script and google chats' webhook.

function getStatusWebPage(){
var url = "https://yourpage"
var response = UrlFetchApp.fetch(url, { followRedirects: false });
var respuesta = response.getResponseCode()
return 'la página web '+url+ ' ha retornado el siguiente código de status : '+respuesta

}


function getDollarObs(){
  var sheetId ="ID_SHEET"
  var sheetName ="DATA"
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName)
  var formula= sheet.getRange("A2");
  //formula.setFormula('=VALOR(REGEXREPLACE(IMPORTXML("https://www.dolaronline.cl/";"//*[@id=\'vlr-cambios\']/div/span[4]");"[,]"; "."))');
  formula.setFormula('=IMPORTXML("https://www.dolaronline.cl/";"//*[@id=\'vlr-cambios\']/div/span[4]")');
  var finalvalue = formula.getDisplayValue()

 console.log(finalvalue)
 return finalvalue

}

function postMessageTogoogleChat(){

  message = {
        'text' : 'Esto es una prueba de webhook de google apps script. Hola a todos. Les comento que  '+getStatusWebPage()}
        //'text' : 'Esto es una prueba de webhook de google apps script. Hola a todos. Les comento que el valor del dolar es: '+getDollarObs()}

  var googleChatUrl = "https://chat.googleapis.com/v1/spaces/AAAAMsPn8_8/messages?key=yourkey&token=yourtoken";
  var payload = JSON.stringify(message)

  var params = {
  method: "POST",
  payload: payload,
  muteHttpExceptions: true,
  contentType: "application/json",
  //headers: { 'Authorization': 'Bearer ' + service.getAccessToken() }
};

  var response = UrlFetchApp.fetch(googleChatUrl, params);
  Logger.log(response.getContentText());
}


function getStatusWebPage(){
var url = "https://empresas.bancoestado.cl/bancoestado/process.asp"
var response = UrlFetchApp.fetch(url, { followRedirects: false });
var respuesta = response.getResponseCode()
return 'la página web '+url+ ' ha retornado el siguiente código de status : '+respuesta

}
