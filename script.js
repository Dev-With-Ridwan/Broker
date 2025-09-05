document.addEventListener('DOMContentLoaded', () => {
            const mainInterface = document.getElementById('main-interface');
            const withdrawPage = document.getElementById('withdraw-page');
            const withdrawButtonMain = document.querySelector('.action-button[data-action="withdraw"]');
            const backButton = document.getElementById('back-button');
            const submitWithdrawButton = document.getElementById('submit-withdraw');
            const amountInput = document.getElementById('amount');

            // Function to show a temporary message box
            const showMessage = (message) => {
                const messageContainer = document.createElement('div');
                messageContainer.classList.add('message-box');
                messageContainer.textContent = message;
                document.body.appendChild(messageContainer);

                setTimeout(() => {
                    messageContainer.remove();
                }, 3000);
            };

            // Event listener for the main Withdraw button
            if (withdrawButtonMain) {
                withdrawButtonMain.addEventListener('click', () => {
                    mainInterface.style.display = 'none';
                    withdrawPage.style.display = 'block';
                });
            }

            // Event listener for the back button
            if (backButton) {
                backButton.addEventListener('click', () => {
                    withdrawPage.style.display = 'none';
                    mainInterface.style.display = 'block';
                });
            }

            // Event listener for the final Withdraw button
            if (submitWithdrawButton) {
                submitWithdrawButton.addEventListener('click', () => {
                    const amount = parseFloat(amountInput.value);
                    const address = document.getElementById('address').value;
                    const network = document.getElementById('network').value;

                    if (!address) {
                        showMessage('Please enter a valid address.');
                        return;
                    }

                    if (isNaN(amount) || amount < 15000) {
                        showMessage('Withdrawal amount must be at least $15,000.');
                        return;
                    }

                    // Placeholder for actual withdrawal logic
                    console.log(`Withdrawing ${amount} BTC to address ${address} on the ${network} network.`);
                    showMessage('Withdrawal request submitted!');
                });
            }
        });