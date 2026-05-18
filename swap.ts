import * as fs from 'fs';

let text = fs.readFileSync('src/App.tsx', 'utf-8');

const projectsStart = text.indexOf('      {/* --- Projects --- */}');
const spotlightStart = text.indexOf('      {/* --- Project Spotlight: PneumoCheck AI --- */}');
const achievementsStart = text.indexOf('      {/* --- Achievements --- */}');

if (projectsStart !== -1 && spotlightStart !== -1 && achievementsStart !== -1) {
    let projectsText = text.substring(projectsStart, spotlightStart);
    let spotlightText = text.substring(spotlightStart, achievementsStart);

    // Swap text by rebuilding the file up to projectsStart, inserting spotlightText, then projectsText, then achievementsStart to end.
    
    // Now let's do the string replacements on texts.
    spotlightText = spotlightText.replace(">Deep Dive<", ">02. Deep Dive<");
    projectsText = projectsText.replace("02. Selected Projects", "03. Selected Projects");
    
    let newText = text.substring(0, projectsStart) + spotlightText + projectsText + text.substring(achievementsStart);
    
    // other replacements
    newText = newText.replace("03. Career Milestones", "04. Career Milestones");
    newText = newText.replace("04. Reel &amp; Moving", "05. Reel &amp; Moving");
    newText = newText.replace("05. Connection", "06. Connection");
    
    newText = newText.replace(
      "{ name: 'Projects', href: '#projects' },\n    { name: 'Spotlight', href: '#spotlight' },",
      "{ name: 'Spotlight', href: '#spotlight' },\n    { name: 'Projects', href: '#projects' },"
    );
    
    fs.writeFileSync('src/App.tsx', newText);
    console.log("Success swapping via indices!");
} else {
    console.log("Failed to find indices", projectsStart, spotlightStart, achievementsStart);
}
