// [Name] SVGImageElement-svgdom-y-prop.js
// [Expected rendering result] image at 0x0 size 200x200 - and a series of PASS messages

description("Tests dynamic updates of the 'y' property of the SVGImageElement object")
createSVGTestCase();

var imageElement = createSVGElement("image");
imageElement.setAttributeNS(xlinkNS, "xlink:href", "../custom/resources/green-checker.png");
imageElement.setAttribute("preserveAspectRatio", "none");
imageElement.setAttribute("x", "0");
imageElement.setAttribute("y", "-190");
imageElement.setAttribute("width", "200");
imageElement.setAttribute("height", "200");
rootSVGElement.appendChild(imageElement);

shouldBe("imageElement.y.baseVal.value", "-190");

function executeTest() {
    imageElement.y.baseVal.value = 0;
    shouldBe("imageElement.y.baseVal.value", "0");

    completeTest();
}

startTest(imageElement, 100, 5);

var successfullyParsed = true;
