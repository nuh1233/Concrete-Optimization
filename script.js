// Function to show relevant inputs based on the selected project type
function showInputs() {
    const projectType = document.getElementById("projectType").value;

    // Hide all input sections first
    document.getElementById("circularInputs").classList.add("hidden");
    document.getElementById("curbInputs").classList.add("hidden");
    document.getElementById("stairsInputs").classList.add("hidden");
    document.getElementById("rectangleInputs").classList.add("hidden");

    // Display the input section based on the selected project type
    if (projectType === "circular") {
        document.getElementById("circularInputs").classList.remove("hidden");
    } else if (projectType === "curb") {
        document.getElementById("curbInputs").classList.remove("hidden");
    } else if (projectType === "stairs") {
        document.getElementById("stairsInputs").classList.remove("hidden");
    } else if (projectType === "rectangle") {
        document.getElementById("rectangleInputs").classList.remove("hidden");
    }
}

// Function to calculate concrete based on the selected project type and dimensions
function calculateConcrete() {
    const projectType = document.getElementById("projectType").value;
    let totalConcrete = 0;
    let originalVolume = 0;

    if (projectType === "circular") {
        // Get values for circular slab/tube
        const radius = parseFloat(document.getElementById("radius").value);
        const depth = parseFloat(document.getElementById("depthCircular").value);

        // Calculate volume for circular slab (πr² * depth)
        const area = Math.PI * Math.pow(radius, 2);
        const volumeCubicFeet = area * depth;
        const volumeCubicYards = volumeCubicFeet / 27;

        originalVolume = volumeCubicYards;

        // Subtract 1.5% for rebar, add 2% spillage, and 2% framing
        totalConcrete = volumeCubicYards * 0.985; // Remove 1.5% for rebar
        totalConcrete = totalConcrete * 1.04; // Add 2% spillage and 2% framing
    } else if (projectType === "curb") {
        // Get values for curb and gutter barrier
        const length = parseFloat(document.getElementById("lengthCurb").value);
        const width = parseFloat(document.getElementById("widthCurb").value);
        const depth = parseFloat(document.getElementById("depthCurb").value);

        // Calculate volume (length * width * depth)
        const volumeCubicFeet = length * width * depth;
        const volumeCubicYards = volumeCubicFeet / 27;

        originalVolume = volumeCubicYards;

        // Subtract 1.5% for rebar, add 2% spillage, and 2% framing
        totalConcrete = volumeCubicYards * 0.985; // Remove 1.5% for rebar
        totalConcrete = totalConcrete * 1.04; // Add 2% spillage and 2% framing
    } else if (projectType === "stairs") {
        // Get values for stairs
        const numSteps = parseFloat(document.getElementById("numSteps").value);
        const treadWidth = parseFloat(document.getElementById("treadWidth").value);
        const treadDepth = parseFloat(document.getElementById("treadDepth").value);
        const riserHeight = parseFloat(document.getElementById("riserHeight").value);

        // Calculate volume for each step
        const volumePerStep = treadWidth * treadDepth * riserHeight;
        const totalVolumeCubicFeet = numSteps * volumePerStep;
        const volumeCubicYards = totalVolumeCubicFeet / 27;

        originalVolume = volumeCubicYards;

        // Subtract 1.5% for rebar, add 2% spillage, and 2% framing
        totalConcrete = volumeCubicYards * 0.985; // Remove 1.5% for rebar
        totalConcrete = totalConcrete * 1.04; // Add 2% spillage and 2% framing
    } else if (projectType === "rectangle") {
        // Get values for rectangular slab
        const length = parseFloat(document.getElementById("lengthRect").value);
        const width = parseFloat(document.getElementById("widthRect").value);
        const depth = parseFloat(document.getElementById("depthRect").value);

        // Calculate volume (length * width * depth)
        const volumeCubicFeet = length * width * depth;
        const volumeCubicYards = volumeCubicFeet / 27;

        originalVolume = volumeCubicYards;

        // Subtract 1.5% for rebar, add 2% spillage, and 2% framing
        totalConcrete = volumeCubicYards * 0.985; // Remove 1.5% for rebar
        totalConcrete = totalConcrete * 1.04; // Add 2% spillage and 2% framing
    }

    // Display the result
    document.getElementById("output").innerHTML = `
        <strong>Original Concrete (No Adjustments):</strong> ${originalVolume.toFixed(2)} cubic yards<br>
        <strong>Optimized Concrete (With Adjustments):</strong> ${totalConcrete.toFixed(2)} cubic yards
    `;
    document.querySelector('.result-box').style.display = 'block';
}
