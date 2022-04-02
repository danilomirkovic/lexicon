function search() {
    let searchText = $('#searchText').val();
    let matches = 0;
    $("#towns li").each((index, item) => {
        if (item.textContent.includes(searchText)) {
            matches++;
        }
    });
    $("#result").text(matches + " matches found.");
    $("#searchText").val("");
}