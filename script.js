document.addEventListener("DOMContentLoaded", () => {
    const revealSelectors = ".reveal, .brand, .node, .line, .card, .img-placeholder, .page-title, .page-intro, .cluster-diagram";
    const elements = document.querySelectorAll(revealSelectors);

    elements.forEach((el) => {
        if (!el.classList.contains("reveal")) {
            el.classList.add("reveal");
        }
    });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
        elements.forEach((el) => el.classList.add("active"));
        const mainNode = document.querySelector(".node-main");
        if (mainNode) mainNode.classList.add("node-main-active");
        const fishNode = document.querySelector(".fish-accent");
        if (fishNode) fishNode.classList.add("active");
        return;
    }

    const staggerTargets = document.querySelectorAll(".reveal");
    staggerTargets.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${i * 80}ms`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    staggerTargets.forEach((el) => observer.observe(el));

    const mainNode = document.querySelector(".node-main");
    if (mainNode) mainNode.classList.add("node-main-active");
});
