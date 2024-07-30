$(function () {

    let number = 0;
    let myData = [];
    let flag = false;
    const button = $('#btn');
    const titleArea = $("#title");
    const contentArea = $("#content");
    const videoArea = $("#video");
  
    function getData() {
      return $.get('ajax.json');
    }
  
    function executeChangeVideo() {
      titleArea.text(myData[number].title);
      contentArea.text(myData[number].content);
      videoArea.attr("src", myData[number].url);
      number == 2 ? number = 0 : number++;
    }
  
    function changeVideo() {
      if (flag == false) {
        getData().then(function (data) {
          myData = data;
          flag = true;
          executeChangeVideo();
        });
      } else {
        executeChangeVideo();
      }
    }
  
    button.click(function () {
      changeVideo();
    });
  
  })