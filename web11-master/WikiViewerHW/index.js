var results = -10;

$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    // const formElement = $(".article-search-form");
    // formElement.on("submit", async event => {
    //     event.preventDefault()
    //     $(".article-list").html('');

    //     /**
    //      * TODO:
    //      *  - Lấy từ khoá search của người dùng
    //      *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
    //      *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
    //      *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
    //      */

    //      search()
    // })

    //Viết lại debounce, throttle bằng cách của mình, không dùng thư viện

    //Tạo 1 function search mới gọi tối đa 1s 1 lần
    // const throttleSearch = setTimeout(search, 1000);
    // const clearThrottle = clearTimeout(throttleSearch);

    //Tạo 1 function search khi gõ nhanh thì không search
    const debouncedSearch = debounced(1000, search);

    const inputElement = $("#article-search-form__input");
    inputElement.on("input", () => {
        clearData()
        debouncedSearch();
    })
}

function debounced(delay, fn) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

async function search() {
    $(".article-list").append(`<div class = "loader"></div>`)
    const searchQuery = getUserSearchQuery();
    const data = await searchWiki(searchQuery);

    if (searchQuery != getUserSearchQuery()) {
        return //return là thôi không chạy function nữa
    }
    processData(data)
}

function clearData() {
    $("div.article-list").empty()
}

async function searchWiki(query) {
    results += 10;
    return await $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        // method: "POST",
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            sroffset: results,
            //encodeURI dùng trong trường hợp có dấu cách trong search, thay dấu cách bằng "%20"
            srsearch: encodeURI(query)
        },
    })
}


function getUserSearchQuery() {
    const inputElement = $("#article-search-form__input");
    const searchQuery = inputElement.val();
    return searchQuery;
}

function processData(data) {
    if (!(data.query && data.query.search)) {
        $('.loader').remove()
        return
    }
    $('.loader').remove()
    const elementString = data.query.search.map(article =>
        `<a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"
    class="article-view">
    <h3 className="article-view__title">${article.title}</h3>
    <p className="article-view__snippet">${article.snippet}</p>
    </a>` ).join("")

    $(".article-list").append(elementString)
}

$(window).on("scroll", () => {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.7) {
        search();
    }
})


// $(document).ready(function () {
//     $("#article-search-form__input").keyup(function () {
//         $(".article-list").html('');
//         $.ajax({
//             url: "https://en.wikipedia.org/w/api.php",
//             method: "POST",
//             data: {
//                 action: "query",
//                 list: "search",
//                 format: "json",
//                 srprop: "snippet",
//                 origin: "*",
//                 //encodeURI dùng trong trường hợp có dấu cách trong search, thay dấu cách bằng "%20"
//                 srsearch: encodeURI($("#article-search-form__input").val())
//             }
//             , success: function (res) { //success được gọi sau khi dữ liệu được trả về

//                 //  CÁCH 2 ĐỂ LÀM BÀI NÀY
//                 //     const elementString = res.query.search.map(article => `<a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"
//                 //     class="article-view">
//                 //     <h3 className="article-view__title">${article.title}</h3>
//                 //     <p className="article-view__snippet">${article.snippet}</p>
//                 // </a>` ).join("")

//                 // $(".article-list").append(elementString)

//                 for (let article of res.query.search) {
//                     $(".article-list").append(`<a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"
//                         class="article-view">
//                         <h3 className="article-view__title">${article.title}</h3>
//                         <p className="article-view__snippet">${article.snippet}</p>
//                     </a>`);
//                 }
//             }
//         });
//     });
// });




