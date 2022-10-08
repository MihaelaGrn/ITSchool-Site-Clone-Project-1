// Dropdown FAQ

import Dropdown from "react-bootstrap/Dropdown";

const dropdownSelector = document.querySelector(".faq-text-section");

dropdownSelector.addEventListener("click", function () {
  return (
    <Dropdown>
      <Dropdown.Toggle>intrebare</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>raspuns</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});
