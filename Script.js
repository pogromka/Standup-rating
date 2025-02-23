document.getElementById('analyzeButton').addEventListener('click', function() {
         const comicName = document.getElementById('comicInput').value;
         // Здесь должен быть запрос к API
         const googleTrends = Math.floor(Math.random() * 100); // Пример данных
         const yandexWordstat = Math.floor(Math.random() * 100); // Пример данных
         const result = `Популярность "${comicName}": Google Trends — ${googleTrends}, Яндекс.Wordstat — ${yandexWordstat}`;
         document.getElementById('result').innerText = result;
     });
