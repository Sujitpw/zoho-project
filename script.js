// Demo sample loads
const sampleLoads = [
  {id:1, pickup:'Patna', drop:'Kolkata', weight:'12 ton', type:'open', budget:18000, date:'2025-11-20'},
  {id:2, pickup:'Patna', drop:'Delhi', weight:'6 ton', type:'container', budget:9500, date:'2025-11-18'},
  {id:3, pickup:'Bangalore', drop:'Mumbai', weight:'10 ton', type:'trailer', budget:22000, date:'2025-11-22'},
  {id:4, pickup:'Chennai', drop:'Bengaluru', weight:'8 ton', type:'open', budget:9000, date:'2025-11-19'},
  {id:5, pickup:'Patna', drop:'Kolkata', weight:'5 ton', type:'container', budget:7000, date:'2025-11-21'},
  {id:6, pickup:'Lucknow', drop:'Kanpur', weight:'7 ton', type:'open', budget:5000, date:'2025-11-23'}
];

const loadsList = document.getElementById('loadsList');
const searchBtn = document.getElementById('searchBtn');
const pickupInput = document.getElementById('pickup');
const dropInput = document.getElementById('drop');
const truckTypeSel = document.getElementById('truckType');
const loadModal = document.getElementById('loadModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function renderLoads(list){
  loadsList.innerHTML = '';
  if(list.length===0){
    loadsList.innerHTML = '<div class="muted">No loads found. Try different filters.</div>';
    return;
  }
  list.forEach(l=>{
    const card = document.createElement('div');
    card.className = 'load-card';
    card.innerHTML = `
      <div class="load-route">${l.pickup} → ${l.drop}</div>
      <div class="load-meta">
        <div>${l.weight} • ${l.type}</div>
        <div class="badge">₹ ${l.budget}</div>
      </div>
      <div class="muted">Pickup: ${l.date}</div>
      <div class="load-actions">
        <button class="btn outline" onclick="viewDetails(${l.id})">View Details</button>
        <button class="btn primary" onclick="contactCompany(${l.id})">Contact</button>
      </div>
    `;
    loadsList.appendChild(card);
  });
}

function viewDetails(id){
  const l = sampleLoads.find(x=>x.id===id);
  modalBody.innerHTML = `
    <h3>${l.pickup} → ${l.drop}</h3>
    <p><strong>Weight:</strong> ${l.weight}</p>
    <p><strong>Truck type:</strong> ${l.type}</p>
    <p><strong>Budget:</strong> ₹ ${l.budget}</p>
    <p><strong>Pickup date:</strong> ${l.date}</p>
    <p><em>Company contact will appear here in production. For demo, use sample contact: +91-XXXXXXXXXX</em></p>
  `;
  loadModal.style.display = 'flex';
}

function contactCompany(id){
  // demo action: open modal with message
  const l = sampleLoads.find(x=>x.id===id);
  modalBody.innerHTML = `
    <h3>Contact Company</h3>
    <p>You're contacting the company for <strong>${l.pickup} → ${l.drop}</strong>.</p>
    <p><button class="btn primary" onclick="startCall()">Call Company</button>
      <button class="btn outline" onclick="startChat()">Chat</button></p>
  `;
  loadModal.style.display = 'flex';
}

function startCall(){
  alert('Demo: Open phone dialer with company number (not available in demo).');
}

function startChat(){
  alert('Demo: Open chat (In production you might open SalesIQ chat widget or in-app chat).');
}

modalClose.addEventListener('click', ()=> loadModal.style.display = 'none');
loadModal.addEventListener('click', (e)=> { if(e.target===loadModal) loadModal.style.display='none' });

searchBtn.addEventListener('click', ()=>{
  const p = pickupInput.value.trim().toLowerCase();
  const d = dropInput.value.trim().toLowerCase();
  const t = truckTypeSel.value;
  const results = sampleLoads.filter(l=>{
    const pm = l.pickup.toLowerCase();
    const dm = l.drop.toLowerCase();
    const tm = l.type;
    const okP = p? pm.includes(p) : true;
    const okD = d? dm.includes(d) : true;
    const okT = t? tm===t : true;
    return okP && okD && okT;
  });
  renderLoads(results);
});

// post load - demo (push into sampleLoads)
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(postForm);
  const newLoad = {
    id: sampleLoads.length+1,
    pickup: fd.get('pickup'),
    drop: fd.get('drop'),
    weight: fd.get('weight') + ' ton',
    type: fd.get('truckType'),
    budget: fd.get('budget'),
    date: fd.get('date')
  };
  sampleLoads.unshift(newLoad);
  renderLoads(sampleLoads);
  postForm.reset();
  alert('Load posted (demo). It will appear in the search results.');
});

// initial render
renderLoads(sampleLoads);
