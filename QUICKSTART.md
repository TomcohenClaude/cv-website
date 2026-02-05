# Quick Start Guide

Welcome to your CLI-style CV website project! This guide will help you get started quickly.

## Project Structure

```
cv-website/
├── index.html              # Main website file (open this in browser)
├── styles.css              # All styling and animations
├── script.js               # Interactive features
├── README.md               # Project documentation
├── AGENT_GUIDE.md          # How to work with AI agents
├── QUICKSTART.md          # This file
└── .claude/
    ├── claude.json         # Project configuration
    └── agents/             # Agent configurations
        ├── frontend-dev.md
        ├── backend-dev.md
        ├── copywriter.md
        └── designer.md
```

## Immediate Next Steps

### Step 1: View Your Website
Open `index.html` in your browser to see the current version with placeholder content.

### Step 2: Provide Your CV Information
Share your actual CV details:
- **Personal Info**: Name, title, location, contact
- **Experience**: Companies, roles, dates, achievements
- **Skills**: Technologies, tools, frameworks
- **Education**: Degrees, universities, years
- **Projects**: Portfolio items with descriptions

### Step 3: Work with Agents
Use the specialized agents to build your CV:

**For Content:**
```
"Copywriter: Here's my experience [paste details].
Write compelling descriptions for my CV."
```

**For Design Changes:**
```
"Designer: I want the skills section to have better visual hierarchy.
Suggest improvements."
```

**For Implementation:**
```
"Frontend Developer: Implement the copywriter's content
with the designer's suggested styling."
```

## Common Tasks

### Update Personal Information
```
"Copywriter: Write a professional summary for a Solution Engineer
with [X] years experience in [technologies]."

"Frontend Developer: Update the profile section in index.html
with this information: [details]"
```

### Change Colors
```
"Designer: Suggest alternative color schemes for the terminal theme."

"Frontend Developer: Update the CSS to use [specific colors]."
```

### Add New Section
```
"Designer: How should I structure a certifications section?"

"Frontend Developer: Add a certifications section to the HTML
following the existing pattern."
```

### Add Interactive Features
```
"Designer: Design a command-line simulator where visitors can
type commands to navigate."

"Frontend Developer: Implement the CLI simulator functionality."
```

## Example First Task

Let's update your profile information:

1. **Provide your details:**
   ```
   Name: [Your Name]
   Title: Solution Engineer
   Years of Experience: [Number]
   Specializations: [Your specialties]
   Contact: [Email, LinkedIn, GitHub]
   ```

2. **Ask the Copywriter:**
   ```
   "Copywriter: Create a compelling professional summary
   using these details: [paste above]"
   ```

3. **Ask the Frontend Developer:**
   ```
   "Frontend Developer: Update the profile section with
   this content: [paste copywriter's output]"
   ```

## Working with the Agent Team

### Solo Agent Tasks
For simple, focused tasks:
```
"Frontend Developer: Change the primary color from green to blue."
"Copywriter: Make this job description more achievement-focused."
```

### Collaborative Tasks
For complex features:
```
"Designer and Frontend Developer: Add a dark/light mode toggle
to the terminal. Designer plan it, Frontend Developer implement it."
```

## Customization Ideas

### Easy Customizations
- Change color scheme (green → blue, amber, red)
- Update content (your actual CV info)
- Adjust fonts and sizes
- Modify animations speed

### Medium Customizations
- Add new sections (Certifications, Awards, Blog)
- Create custom animations
- Add interactive elements
- Implement theme switcher

### Advanced Features (Backend Developer)
- Contact form with email
- Admin panel for editing
- Blog with CMS
- Analytics dashboard
- API integrations

## Need Help?

### Understanding Agents
Read `AGENT_GUIDE.md` for detailed information on how to work with each agent.

### Understanding Project
Read `README.md` for comprehensive project documentation.

### Agent Capabilities
Read individual agent files in `.claude/agents/` to see what each agent can do.

## Tips for Best Results

1. **Be Specific**: "Add smooth scroll" vs "Make it better"
2. **One Thing at a Time**: Focus on one section or feature at a time
3. **Provide Context**: Share relevant information about your background
4. **Ask for Options**: "Provide 3 variations" for different choices
5. **Review and Iterate**: Check output and request improvements

## Your First Real Task

Here's a suggested workflow to get started:

**Task: Update the entire CV with your real information**

1. **Gather** your CV content (resume, LinkedIn, portfolio)
2. **Share** with the Copywriter for professional writing
3. **Review** the content variations provided
4. **Choose** your preferred version
5. **Update** via Frontend Developer
6. **Polish** with Designer feedback

Try it now:
```
"I want to update my CV with my real information. Let me share my details:

[Paste your current CV or information here]

Copywriter: Please create professional content for each section.
After that, Frontend Developer can update the HTML."
```

## Project Goals

- ✅ Modern, tech-focused CV website
- ✅ CLI/terminal aesthetic
- ✅ Professional presentation
- ✅ Interactive and engaging
- ✅ Responsive design
- 🎯 Personalized content (your task!)
- 🎯 Optional: Backend features (future)

## Ready to Start?

Open `index.html` in your browser and see the current version, then start working with the agents to make it yours!

---

**Quick Help Commands:**
- "Show me the Frontend Developer's capabilities"
- "What can the Copywriter help me with?"
- "I need design advice for [specific element]"
- "How do I add [specific feature]?"
