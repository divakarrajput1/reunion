
# Objective
The primary goal was to implement key features like sorting, filtering, grouping, and pagination, using open-source libraries Tanstack React Table.
## 1. Pagination
Task Description: Implement pagination to display 10 rows per page with controls to navigate between pages.

Completion Details:
Used built-in pagination from Tanstack React Table to display data in sets of 10 rows per page.
Added pagination controls at the bottom of the table for easy navigation between pages (first,next, previous, and last page).
Outcome: Pagination is functional, allowing users to navigate through large datasets in manageable chunks.

## 2. Sorting
Task Description: Enable sorting functionality for all columns in the table. Users should be able to click on column headers to sort the data in ascending or descending order.

Completion Details:
Implemented sorting for all columns using Tanstack React Table’s sorting utility.
Integrated both ascending and descending sorting modes.
Sort indicators (up/down arrows) are displayed alongside column headers to show the current sort order.
Outcome: Users can now sort the data by any column, helping them better organize the information based on their preferences.
## 3. Grouping Column Data
Task Description: Allow data grouping by "category" and "subcategory" columns. Users should be able to group by both columns simultaneously or independently.

Completion Details:
Grouping logic was implemented using the grouping feature from Tanstack React Table.
Created a panel at the top of table where users can select either or both "category" and "subcategory" to group data.
Grouped rows are displayed hierarchically, with subgroups nested under their respective groups.
Outcome: Data is now neatly grouped for better analysis and viewing of related information together.

## 4. Filtering (Search & Filter Rows)
Task Description: Add multiple filtering options:
Global search filter at the top of the table.
Column-specific fuzzy search.
Multi-select dropdown filters for "category" and "subcategory."
Range filter for numbers (price) and dates (createdAt).

## Additional Implementations:
Custom Cell Value Rendering: Implemented a custom renderer for the "createdAt" and "updatedAt" columns to display dates in the DD-MMM-YYYY HH: MM format for better readability.

## Conclusion:
The advanced data table web application has been successfully developed, incorporating all required features such as sorting, filtering, grouping, and pagination. Each task was completed using the recommended open-source libraries, ensuring efficient use of existing functionalities. The final product is a functional, visually appealing, and easy-to-navigate web app that meets the project's objectives.

Hosting and Submission:
The web app has been hosted on Netlify (https://fancy-cranachan-94ea0e.netlify.app/) and is accessible via the provided link.
The code is hosted in a private GitHub repository and shared with the specified users.
All necessary submission forms have been completed as per the project guidelines.

Thank you 
