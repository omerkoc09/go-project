const i=r=>r==null||r===""?!0:!!(Array.isArray(r)&&r.length===0),e=r=>r==null,s=r=>Array.isArray(r)&&r.length===0,d=r=>e(r)||s(r)||r===!1?"Bu alan zorunludur":!!String(r).trim().length||"Bu alan zorunludur",o=r=>{if(i(r))return!0;const t=/^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i;return Array.isArray(r)?r.every(n=>t.test(String(n)))||"Geçerli bir Email olmalıdır":t.test(String(r))||"Geçerli bir Email olmalıdır"},a=r=>{if(i(r))return!0;const t=/^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/;return Array.isArray(r)?r.every(n=>t.test(String(n)))||"Geçerli bir Telefon Numarası olmalıdır":t.test(String(r))||"Geçerli bir Telefon Numarası olmalıdır"};export{o as e,a as p,d as r};
