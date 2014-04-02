# EA[C|D] Scratch Pad, aka ea-scrax

*read ea-scrax as "a scratch"*

## concept

**[codepen](http://codepen.io) for [SAA](http://www.archivists.org) XML standards**

Let users upload/link-to EAx XML documents and preview them with
XSLT (generic or user supplied).

Edit XML and preview the changes.

Provide URLs to share encoding and XSLT examples.

## proof of concept

http://tingletech.github.io/ea-scrax/

### tech stack
includes

 * http://yeoman.io
 * [Saxon-CE (client edition)](http://www.saxonica.com/ce/index.xml), Saxonica's implementation of XSLT 2.0 for use on web browsers.
 * http://codemirror.net
 * see `bower.json` for more

## ideas for features?

Is this a good idea?  Have suggestions or want to help?

https://github.com/tingletech/ea-scrax/issues

# building

```
grunt test
grunt build               # check `dist` with python -m SimpleHTTPServer
grunt buildcontrol:pages  # commit `dist` to `gh-pages` branch and push to github
```

# License 

Copyright © 2014, Regents of the University of California
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, 
  this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, 
  this list of conditions and the following disclaimer in the documentation 
  and/or other materials provided with the distribution.
- Neither the name of the University of California nor the names of its
  contributors may be used to endorse or promote products derived from this 
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE.
