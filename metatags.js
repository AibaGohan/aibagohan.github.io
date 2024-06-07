document.addEventListener("DOMContentLoaded", function() {
    // Get all title tags in the document
    let titles = document.getElementsByTagName("title");

    // Iterate over each title tag
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i].innerText;

        // Create the meta title tag
        let metaTitle = document.createElement("meta");
        metaTitle.name = "title";
        metaTitle.content = title;

        // Create the meta description tag
        let metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = "( ´∀｀)ヵヵヵ站主用來存放人設與古怪言論的自留地，算是半個部落格站。";

        // Insert the meta tags after the title tag
        titles[i].parentNode.insertBefore(metaTitle, titles[i].nextSibling);
        titles[i].parentNode.insertBefore(metaDescription, metaTitle.nextSibling);
    }
});

function setSocialShareTags(title, description, imageUrl, pageUrl) {
    const metaTags = {
        "og:description": "( ´∀｀)ヵヵヵ站主用來存放人設與古怪言論的自留地，算是半個部落格站。",
        "og:image": "/ogimage.svg",
        "og:type": "article"
        "og:url": window.location.href,
        "twitter:card": "summary_large_image",
        "twitter:description": "( ´∀｀)ヵヵヵ站主用來存放人設與古怪言論的自留地。算是半個部落格站。",
        "twitter:image": "/ogimage.svg",
        "twitter:url": window.location.href
    };

    for (let property in metaTags) {
        let metaTag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
        if (!metaTag) {
            metaTag = document.createElement('meta');
            if (property.startsWith("og:")) {
                metaTag.setAttribute('property', property);
            } else {
                metaTag.setAttribute('name', property);
            }
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', metaTags[property]);
    }
}

setSocialShareTags();

// Example usage:
setSocialShareTags("Your Page Title", "A short description of your page.", "URL to your image", "URL of your page");