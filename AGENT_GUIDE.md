# Agent Team Guide

This document explains how to work with the AI agent team for building your CLI-style CV website.

## Agent Team Overview

Your project has four specialized agents, each with specific expertise:

### 1. **Frontend Developer** 🎨
- **Focus**: HTML, CSS, JavaScript implementation
- **When to use**: Building UI, styling, animations, responsive design
- **Primary phase**: Development & Polish

### 2. **Backend Developer** ⚙️
- **Focus**: APIs, databases, server-side logic
- **When to use**: Contact forms, dynamic content, future features
- **Primary phase**: Future Enhancements

### 3. **Copywriter** ✍️
- **Focus**: Professional content, messaging, storytelling
- **When to use**: Writing CV content, project descriptions, summaries
- **Primary phase**: Content & Planning

### 4. **Designer** 🎯
- **Focus**: Visual design, UX, color schemes, layouts
- **When to use**: Design decisions, aesthetics, user experience
- **Primary phase**: Planning & Polish

## How to Use the Agents

### Method 1: Direct Reference
When asking for help, mention the agent by role:

```
"Frontend Developer: Add a smooth scroll effect to navigation"
"Copywriter: Write a professional summary for a Solution Engineer with 7 years experience"
"Designer: Suggest a color scheme for the skills section"
"Backend Developer: How should I structure the contact form API?"
```

### Method 2: Read Agent Configuration
Before working on a specific task, read the relevant agent config:

```
"Read the Frontend Developer agent config and then implement a responsive navbar"
```

### Method 3: Task-Based Workflow
Break down work by agent specialty:

**Current Task: "Update the Experience Section"**
1. **Designer**: Review layout and visual hierarchy
2. **Copywriter**: Write compelling experience descriptions
3. **Frontend Developer**: Implement the updated content with styling

## Example Workflows

### Workflow 1: Adding New Content

**Task**: "Add my work experience to the CV"

1. **Copywriter** creates professional experience descriptions
2. **Designer** reviews content hierarchy and spacing
3. **Frontend Developer** implements in HTML/CSS
4. **Designer** provides final polish on styling

### Workflow 2: Adding Interactive Feature

**Task**: "Add a command-line simulator"

1. **Designer** plans user experience and visual design
2. **Frontend Developer** implements JavaScript functionality
3. **Copywriter** writes help text and command descriptions
4. **Frontend Developer** integrates everything

### Workflow 3: Adding Backend Feature

**Task**: "Create a contact form"

1. **Designer** designs form layout and states
2. **Frontend Developer** builds HTML form and validation
3. **Backend Developer** creates API endpoint
4. **Frontend Developer** connects frontend to backend
5. **Copywriter** writes form labels and messages

## Agent Collaboration Patterns

### Design → Development
```
Designer defines: Colors, spacing, typography, layout
↓
Frontend Developer implements with CSS/JS
```

### Content → Implementation
```
Copywriter creates: Professional summaries, descriptions
↓
Frontend Developer adds to HTML structure
↓
Designer reviews visual presentation
```

### Full Feature Flow
```
1. Designer: Plan UX and visual design
2. Copywriter: Create content and messaging
3. Frontend Developer: Implement HTML/CSS/JS
4. Backend Developer: Add server-side logic (if needed)
5. All: Review and polish
```

## Quick Commands for Each Agent

### Frontend Developer Commands
```
- "Implement a responsive navigation menu"
- "Add smooth scroll animations"
- "Fix layout issues on mobile"
- "Optimize CSS performance"
- "Create hover effects for links"
```

### Backend Developer Commands
```
- "Create contact form API endpoint"
- "Set up database schema"
- "Implement user authentication"
- "Add rate limiting"
- "Create serverless function for email"
```

### Copywriter Commands
```
- "Write a professional summary"
- "Improve this job description"
- "Create project descriptions"
- "Optimize content for SEO"
- "Write call-to-action text"
```

### Designer Commands
```
- "Choose a color palette"
- "Review visual hierarchy"
- "Design hover states"
- "Create icon set"
- "Ensure accessibility compliance"
```

## Project Phases & Agent Priority

### Phase 1: Planning (Current)
- **Primary**: Designer, Copywriter
- **Tasks**: Visual style, content strategy, information architecture

### Phase 2: Development (Current)
- **Primary**: Frontend Developer, Designer
- **Tasks**: HTML structure, CSS styling, JavaScript features

### Phase 3: Content (Next)
- **Primary**: Copywriter
- **Tasks**: Write professional content, optimize messaging

### Phase 4: Polish (Next)
- **Primary**: Designer, Frontend Developer
- **Tasks**: Animations, performance, accessibility, testing

### Phase 5: Future Enhancements
- **Primary**: Backend Developer, Frontend Developer
- **Tasks**: APIs, database, dynamic features

## Tips for Effective Agent Collaboration

1. **Be Specific**: "Frontend Developer: Add a fade-in animation to the profile section"
2. **Chain Tasks**: "Designer suggest colors, then Frontend Developer implement them"
3. **Request Reviews**: "Designer: Review the current layout and suggest improvements"
4. **Ask for Options**: "Copywriter: Provide 3 variations of this summary"
5. **Get Expertise**: "Backend Developer: What's the best way to handle form validation?"

## Agent Configuration Files

Each agent has a detailed configuration file in `.claude/agents/`:
- `frontend-dev.md` - Frontend development expertise
- `backend-dev.md` - Backend development expertise
- `copywriter.md` - Content writing expertise
- `designer.md` - Design expertise

Read these files to understand each agent's full capabilities!

## Example Multi-Agent Task

**Complete Task**: "Improve the Skills Section"

```markdown
1. Designer:
   - Review current skills section layout
   - Suggest visual improvements for better hierarchy
   - Choose colors for skill categories

2. Copywriter:
   - Review skill descriptions
   - Suggest better categorization
   - Add compelling context to technical skills

3. Frontend Developer:
   - Implement designer's layout suggestions
   - Add hover animations to skill items
   - Make section responsive

4. All Agents Review:
   - Designer: Check visual consistency
   - Copywriter: Verify content clarity
   - Frontend Developer: Test functionality
```

## Getting Started

To start working with the agents:

1. **Review agent configs**: Read `.claude/agents/*.md` files
2. **Identify your task**: Determine what needs to be done
3. **Choose relevant agents**: Select 1-2 agents for the task
4. **Give clear instructions**: Be specific about what you need
5. **Iterate**: Review output and request refinements

## Project Configuration

The project configuration is stored in `.claude/claude.json` and includes:
- Agent definitions and priorities
- Workflow phases
- Tech stack details
- Design system tokens
- Available commands

## Need Help?

- **Not sure which agent?** Describe your task and ask for agent recommendation
- **Need multiple agents?** Request collaboration between specific agents
- **Want to understand capabilities?** Ask to read the agent configuration file

---

**Remember**: Each agent is specialized. Using the right agent for each task ensures better results and more efficient collaboration!
