
        const groceryList = [];
        function addItem() {
            const itemInput = document.getElementById("itemInput");
            const newItem = itemInput.value.trim();

            if (newItem !== "") {
                groceryList.push({ name: newItem, purchased: false });
                itemInput.value = "";
                displayLists();
            }
        }

        function togglePurchased(index) {
            groceryList[index].purchased = !groceryList[index].purchased;
            displayLists();
        }

        function displayLists() {
            const shoppingList = document.getElementById("shoppingList");
            const purchasedList = document.getElementById("purchasedList");
            
            shoppingList.innerHTML = "";
            purchasedList.innerHTML = "";

            for (let i = 0; i < groceryList.length; i++) {
                const listItem = document.createElement("li");
                listItem.textContent = groceryList[i].name;

                if (groceryList[i].purchased) {
                    listItem.classList.add("completed");
                    purchasedList.appendChild(listItem);
                } else {
                    listItem.addEventListener("click", () => togglePurchased(i));
                    shoppingList.appendChild(listItem);
                }
            }
        }

        displayLists();

        function showRemainingItems() {
            const shoppingList = document.getElementById("shoppingList");
            const purchasedList = document.getElementById("purchasedList");
            
            shoppingList.style.display = "block";
            purchasedList.style.display = "none";
        }

        function showPurchasedItems() {
            const shoppingList = document.getElementById("shoppingList");
            const purchasedList = document.getElementById("purchasedList");
            
            shoppingList.style.display = "none";
            purchasedList.style.display = "block";
        }