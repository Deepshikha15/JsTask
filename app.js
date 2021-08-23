const fetch = require("node-fetch");

async function fetchTest(responses) {
    let response = await

        fetch('http://norvig.com/big.txt')
            .then(response => response.text())
            .then((response) => {
                console.log(response); // ------------------> read text  from doc

                var words = response.split(/[ \.\?!,\*'"]+/);
                console.log("words...", words);

                var array = Object.keys(words).map(function (key) {
                    return { text: words[key], size: key };
                });

                console.log(array); //-----------------------> occurence count of words

                var sortedKeys = array.sort(function (a, b) {
                    return b.size - a.size;
                });
                var newarr = sortedKeys.slice(0, 10);
                console.log(newarr); // --------------> top 10 text and occurence

                var permittedValues = newarr.map(value => value.text);
                console.log(permittedValues); //---------------> sorted key in array

                fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20210216T114936Z.e4989dccd61b9626.373cddfbfb8a3b2ff30a03392b4e0b076f14cff9&lang=en-en&text=in')
                    .then(responses => responses.text()).then((responses) => {
                        console.log("responses", responses);
                    }).catch(err => console.error(err));
            })
            .catch(err => console.log("error response.", err));

}

(async () => {
    await fetchTest();
})();