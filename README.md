# IIST Data Analysis and Visualization

## 1. Setup

### Prerequisites

- Node.js installed
- A local MongoDB database or cloud-based Atlas MongoDB

### Project Preparation

1. Download the code from the repository, for example using the command:
`gh repo clone alicjakolodziejczyk/IIST-Data-Analysis-and-Visualization`

2. In the `server` folder, add a `.env` file and save the `DB` parameter in it, containing the URL for the database connection.

### Installing Node Packages on Backend:

```
cd server
npm install
```
### Installing Node Packages on Frontend:
```
cd client
npm install
```
### Running the Frontend and Backend:
Run the following command in the `client` and `server` folders:
```
npm start
```

## 2. Usage
> [!WARNING]
> The program currently contains data for all mandatory subjects and one specialization - CE.
> Selecting other specializations in the filter may result in no data being displayed.

### Effects Subpage

This page shows what part of each effect the student has already completed, how much they acquire in a given semester, and how much remains in future semesters.

To start displaying data, at least the semester in which the user is currently enrolled must be filled in on the left panel; the rest of the data is not required.

- Hovering over the progress bar displays the subjects whose data contributed to the specific result of a particular effect.
  
### Graphs Subpage

Displays the relationship between subjects and effects.

- Includes filters on the dark bar at the bottom of the page.
- Allows showing or hiding the number of common effects using a checkbox.
- Left-clicking on a node highlights all edges that come out of it.
- Right-clicking on a node displays a window with full subject data.
  
### Correlation Matrix Subpage

  This subpage contains filters on the dark bar at the bottom of the page, applicable to both sections.
  
  **Section 1 - Matrix**
    In addition to displaying the matrix, this section allows:
    - Displaying the subject name when hovering over the code.
    - Displaying a window with complete subject data when clicking on the code.
    - Displaying a window comparing complete data on subjects that make up the correlation when clicking on the correlation result.
    
  **Section 2 - Table**
   Displays pairs of subjects sorted in descending order of their correlation.
    - Displaying a window comparing complete data on subjects that make up the correlation when clicking on a row.

### Data Subpage

Initially, this page displays complete data for each subject in the syllabus.
Using filters located on the dark bar at the bottom, you can display subjects that meet specific criteria, e.g., semester 5, elective subjects, CE specialization.


