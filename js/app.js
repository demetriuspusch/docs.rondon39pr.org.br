let list = document.getElementById("list");

const docs = [
    {
        url: "estatuto-rondon.pdf",
        title: "Estatuto do Rondon"
    }
]

docs.map((doc, index) => {
    let item = document.createElement("div");
    item.setAttribute("id", index);
    item.className = "item";
    
    item.innerHTML = `
        <span class='item_info'>
            <i class="ph ph-file"></i>
            <a href="/assets/${doc.url}" rel="noopener noreferrer" target="_blank">${doc.title}</a>
        </span>
        <button onclick="copyUrl('${doc.url}', ${index});" id="copyBtn${index}">
            <i class="ph ph-copy"></i>
        </button>
    `;

    list.appendChild(item);
});

function copyUrl(url, index) {
    navigator.clipboard.writeText(`https://docs.rondon39pr.org.br/assets/${url}`);
    let btn = document.getElementById(`copyBtn${index}`);
    btn.innerHTML = `<i class="ph ph-check"></i>`;
    setTimeout(() => {
        btn.innerHTML = `<i class="ph ph-copy"></i>`;
    }, 2000);
}
