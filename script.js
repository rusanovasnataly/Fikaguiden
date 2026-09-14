const filterButtons = document.querySelectorAll(".filters button");
const recipeCards = document.querySelectorAll(".recipe-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        recipeCards.forEach(function (card) {
            if (
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });

        filterButtons.forEach(function (button) {
            button.setAttribute("aria-pressed", "false");
        });

        button.setAttribute("aria-pressed", "true");
    });
});