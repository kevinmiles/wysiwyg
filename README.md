
This is a local/offline WYSIWYG editor. It is good for small pages like *blogs*, *manuals*, 
*howtos*, etc.  It is a good alternative to online editors like *Dillinger* or *StackEdit*.  I used both 
and found them very restrictive.  This editor has no restrictions whatsoever. 

How to use: *just drop runme.html into your browser*. 

The flexibility have you can use is as follows:

 * you can define your own markup in `rules.js`. There are two kinds of rules: *head* refers to whole lines that start from the specified string, and *anywhere* strings are replaced anywhere in text. 
 * you can use sliders on the page to perform some useful functions like: *plus* adds raw HTML that you specify.  The *greater than* button at the top-middle will sync your content from output back into the editable area.  This will help you when the split windows get out of sync.
 * each new page starts from the content stored in `stub.html`. You can alter it in any way to create your own standard template.  Note that it has `CSS style` in it which is used by `rules.js`.  So, if you change or erase the CSS from the template, make sure that you sync the changes with the markup rules.   
 

You can always export the *raw HTML* using one of the sliders on the left side.  If you are riding a train or a plane and need to right multiple blogs, you can store them in `LocalStorage` using, again, one of the sliders.  Their names will be shown as buttons in the slider which you can use to recover and export *raw HTML* later. 

One last note.  Images in current version are `floated` with 50% width.  If you need to change that, you have to *(1)* change the CSS in `stub.html` and *(2)* erase the first line in the `after()` function which -- as you can see -- enforces floating CSS on all the images.  Actually, all the post-processing of your content is done in this function, so you can use it to change markup processing.  The function is at the bottom of `runme.html`.

Enjoy!