describe("Home page", () => {
    beforeEach(() => {
        cy.visit("https://seankelliher.github.io/img-gallery/")
    })

    it("First thumbnail is default large image", () => {
        cy.get("section.large-box").find("img").should(
            "have.attr",
            "src",
            "https://seankelliher.github.io/img-gallery/images/swans-island-ferry.jpg"
        )
        cy.get("#caption").contains(
            "On the ferry from the mainland town of Bass Harbor"
        )
        cy.get("section.thumbnails-box").find("img").eq(0).should(
            "have.attr", "src", "images/swans-island-ferry-sm.jpg"
        )
    })

    it("Clicked thumbnail loads properly", () => {
        cy.get("section.thumbnails-box").find("img").eq(4).click()
        cy.get("section.large-box").find("img").should(
            "have.attr",
            "src",
            "https://seankelliher.github.io/img-gallery/images/grand-teton.jpg"
        )
        cy.get("#caption").contains(
            "The end of summer and the beginning of autumn on display"
        )
    })

    it("Previous arrow works properly", () => {
        cy.get("section.thumbnails-box").find("img").eq(2).click()
        cy.get("#previous-arrow").click()
        cy.get("section.large-box").find("img").should(
            "have.attr",
            "src",
            "https://seankelliher.github.io/img-gallery/images/supreme-court.jpg"
        )
        cy.get("#caption").contains(
            "Outside the Supreme Court building in Washington, DC."
        )
    })

    it("Next arrow works properly", () => {
        cy.get("section.thumbnails-box").find("img").eq(2).click()
        cy.get("#next-arrow").click()
        cy.get("section.large-box").find("img").should(
            "have.attr",
            "src",
            "https://seankelliher.github.io/img-gallery/images/tree-road.jpg"
        )
        cy.get("#caption").contains(
            "Rays of the late afternoon sun reflect on tree leaves"
        )
    })
})
