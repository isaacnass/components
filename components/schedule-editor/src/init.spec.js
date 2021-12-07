let testScheduleEditor;

beforeEach(() => {
  cy.visit("/components/schedule-editor/src/index.html");
  cy.get("nylas-schedule-editor").should("exist");
  cy.get("nylas-schedule-editor").then((element) => {
    const component = element[0];
    component.setAttribute("id", "test-schedule-editor");
    testScheduleEditor = component;
  });
});

describe("schedule-editor component", () => {
  it("Renders", () => {
    cy.get(testScheduleEditor)
      .should("have.prop", "id")
      .and("equal", "test-schedule-editor");
  });

  describe("Allows for multiple meetings", () => {
    it("Allows the user to add consecutive meetings", () => {
      cy.get(".basic-details fieldset").should("have.length", 1);
      cy.get(".basic-details button.add-event").click();
      cy.get(".basic-details fieldset").should("have.length", 2);
      cy.get(".basic-details button.add-event").click();
      cy.get(".basic-details fieldset").should("have.length", 3);
      cy.get(".basic-details button.remove-event").eq(0).click();
      cy.get(".basic-details button.remove-event").eq(0).click();
      cy.get(".basic-details fieldset").should("have.length", 1);
    });
  });
});
