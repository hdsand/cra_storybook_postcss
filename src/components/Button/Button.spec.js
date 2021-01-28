/// <reference types="cypress" />
import React from "react";
import { mount } from "cypress-react-unit-test";
import Button from './Button';

describe("Button", () => {
  it("Button primary", () => {
    const text = 'some text';
    mount(<Button primary>{text}</Button>)
    cy.get("button").should("have.text", text)
    cy.get('button').should('have.css', 'background-color', 'rgb(47, 154, 255)')
    cy.get('button').should('have.css', 'border', '1px solid rgba(16, 24, 40, 0.1)')
    cy.get('button').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('button').should('have.css', 'box-shadow', 'rgba(40, 47, 61, 0.12) 0px -1px 0px 0px inset')
    cy.get('button').should('have.css', 'border-radius', '4px')
  })
  it("Button secondary", () => {
    const text = 'some text';
    mount(<Button secondary>{text}</Button>)
    cy.get("button").should("have.text", text)
    cy.get('button').should('have.css', 'background', 'linear-gradient(0deg, rgba(47, 154, 255, 0.3), rgba(47, 154, 255, 0.3)) repeat scroll 0% 0% / auto padding-box border-box, rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box')
    cy.get('button').should('have.css', 'border', '1px solid rgba(16, 24, 40, 0.05)')
    cy.get('button').should('have.css', 'color', 'rgb(16, 24, 40)')
    cy.get('button').should('have.css', 'box-shadow', 'rgba(40, 47, 61, 0.12) 0px -1px 0px 0px inset')
    cy.get('button').should('have.css', 'border-radius', '4px')
  })
})
