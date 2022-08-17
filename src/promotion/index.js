let url = 'http://localhost:3004/promotions';

function getPromotionList(url) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var list = data;
            var rows = [];

            for (var i = 0; i < list.length; i++) {
                var str = ' <tr>' +
                    '                    <td>' + list[i].id + '</td>' +
                    '                    <td>' + list[i].title + '</td>' +
                    '                    <td>' + list[i].startDate + '</td>' +
                    '                    <td>' + list[i].endDate + '</td>' +
                    '                    <td>' + list[i].type + '</td>' +
                    '                    <td>' + list[i].description + '</td>' +
                    '                </tr>'
                console.log(str)
                rows.push(str)
            }
            var dataTable = document.getElementById('promotion-table-data');
            dataTable.innerHTML = rows.join("")
        }
    }
}

window.onload = function () {
    getPromotionList(url);
};

function updatePromotionList(type){
    if(type === 'all'){
        getPromotionList(url)
    }else {
        getPromotionList(`${url}?type=${type}`)
    }
}

