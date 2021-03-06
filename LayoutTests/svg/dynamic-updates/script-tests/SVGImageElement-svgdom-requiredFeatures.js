// [Name] SVGImageElement-svgdom-requiredFeatures.js
// [Expected rendering result] a series of PASS messages

createSVGTestCase();

var imageElement = createSVGElement("image");
imageElement.setAttribute("width", "200");
imageElement.setAttribute("height", "200");

rootSVGElement.appendChild(imageElement);

function executeTest() {
    debug("Check that SVGImageElement is initially displayed");
    shouldBeEqualToString("document.defaultView.getComputedStyle(imageElement, null).display", "inline");
    debug("Check that setting requiredFeatures to something invalid makes it not render");
    imageElement.requiredFeatures.appendItem("foo");
    shouldBeEqualToString("document.defaultView.getComputedStyle(imageElement, null).display", "");
    debug("Check that setting requiredFeatures to something valid makes it render again");
    imageElement.requiredFeatures.replaceItem("http://www.w3.org/TR/SVG11/feature#Shape", 0);
    shouldBeEqualToString("document.defaultView.getComputedStyle(imageElement, null).display", "inline");
    debug("Check that adding something valid to requiredFeatures keeps rendering the element");
    imageElement.requiredFeatures.appendItem("http://www.w3.org/TR/SVG11/feature#Gradient");
    shouldBeEqualToString("document.defaultView.getComputedStyle(imageElement, null).display", "inline");
    debug("Check that adding something invalid to requiredFeatures makes it not render");
    imageElement.requiredFeatures.appendItem("foo");
    shouldBeEqualToString("document.defaultView.getComputedStyle(imageElement, null).display", "");

    completeTest();
}

startTest(imageElement, 0, 100);

var successfullyParsed = true;
