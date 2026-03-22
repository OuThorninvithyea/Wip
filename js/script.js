let activeDropdown = null;
const likeBtn = document.querySelectorAll(".like-btn");

document.querySelectorAll(".three-dot-post").forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = dot.querySelector(".three-dot-click");

    if (activeDropdown && activeDropdown !== dropdown) {
      activeDropdown.classList.remove("active");
    }

    dropdown.classList.toggle("active");
    activeDropdown = dropdown.classList.contains("active") ? dropdown : null;
  });
});

document.addEventListener("click", () => {
  if (activeDropdown) {
    activeDropdown.classList.remove("active");
    activeDropdown = null;
  }
});

// Pop-up toggle
const popUpBackground = document.querySelector(".pop-up-background");
const joinNowBtn = document.querySelector(".join-now");
const closeBtn = document.querySelector(".pop-up-close-btn");

if (joinNowBtn && popUpBackground) {
  joinNowBtn.addEventListener("click", () => {
    popUpBackground.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    popUpBackground.style.display = "none";
  });

  popUpBackground.addEventListener("click", (e) => {
    if (e.target === popUpBackground) {
      popUpBackground.style.display = "none";
    }
  });
}

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const textNode = btn.childNodes[btn.childNodes.length - 1];
    let count = parseInt(textNode.textContent.trim()) || 0;

    if (btn.classList.contains("liked")) {
      count -= 1;
      btn.classList.remove("liked");
      btn.style.color = "";
      btn.style.backgroundColor = "";
      btn.style.border = "";
    } else {
      count += 1;
      btn.classList.add("liked");
      btn.style.color = "oklch(0.637 0.237 25.331)";
      btn.style.backgroundColor = "oklch(0.936 0.032 17.717)";
      btn.style.border = "1px solid oklch(0.637 0.237 25.331)";
    }

    textNode.textContent = " " + count;
  });
});

// Billing Toggle Logic for Join Page
const billingToggle = document.getElementById('billing-toggle');
if (billingToggle) {
    const discountInfo = document.getElementById('discount-info');
    const mainPrice = document.getElementById('main-price');
    const subTotalVal = document.getElementById('sub-total-val');
    const totalDueVal = document.getElementById('total-due-val');
    const proDealBenefits = document.querySelector('.pro-deal-benefits');

    function updatePricing() {
        if (billingToggle.checked) {
            // Annual billing
            discountInfo.style.display = 'flex';
            mainPrice.innerHTML = '$199.00 <span>per year</span>';
            subTotalVal.innerText = 'US$199.00';
            totalDueVal.innerText = 'US$199.00';
            if (proDealBenefits) proDealBenefits.classList.add('active');
        } else {
            // Monthly billing
            discountInfo.style.display = 'none';
            mainPrice.innerHTML = '$29.00 <span>per month</span>';
            subTotalVal.innerText = 'US$29.00';
            totalDueVal.innerText = 'US$29.00';
            if (proDealBenefits) proDealBenefits.classList.remove('active');
        }
    }

    billingToggle.addEventListener('change', updatePricing);
    
    // Initial state
    updatePricing();
}
