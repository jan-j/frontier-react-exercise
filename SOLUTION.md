# Solution

## Code notes

- In the real codebase I would most likely use `formik` or `react-hook-form` to manage form state and validation. That would save me a significant amount of time here.
- Form validation is pretty simple, I initially wanted to just rely on the standard HTML inputs validation, but it's not the easiest to customise or get the validation state back to react. Also, any more advanced field types would need their own custom validation anyway.
- I tried to provide as specific types as possible to all functions and objects, but I had to cut corners in a few places, but I'm fully aware that given more time to think it through some function/object definitions could be refactored to be better typed.
- Components are using CSS modules as it's a nice and simple way to style it without using BEM to ensure no class collisions.
- Theme support is implemented using CSS variables. There's definitely a need to provide more color properties or derive them from the primary and secondary ones. Thing like error message/border or input placeholders are hard coded now.
- I reckoned from the form example image above, that each section could have been separated into individual form wizard page, but I decided not to do it, as it was a little too much to implement in this exercise.
- Removed duplicated Spanish option from both choice questions, no other languages were duplicated, so I figured this was a mistake.
- In the real world form example, question about other languages should not be required, so no languages selected should be a valid option, but I let it be how it was defined.
- Age input should probably have min, max and step metadata options defined, pattern that matches only integers wouldn't hurt either.
- Boolean component is unit tested. I chose it because it's not a standard HTML field, but still pretty simple.

## Time

I worked on this solution on and off for a few days, and I spent on it around 5 hours. I really enjoyed it, because it's a fun project, that's why I took the time to actually come up with something solid.

## Feedback

As much as I enjoyed this exercise and took definitely more time than I planned to implement a nice starting point to an actual form builder, it should have been a little smaller interview task. That could be done by limiting the number of different field types, removing sections, etc. or by providing some project starter that would at least minimally save some time.
