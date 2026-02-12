// Application form logic
document.addEventListener('DOMContentLoaded', () => {
  // Get position from URL
  const urlParams = new URLSearchParams(window.location.search);
  const positionKey = urlParams.get('position');
  
  if (!positionKey || !POSITIONS[positionKey]) {
    document.body.innerHTML = '<div class="container"><div class="form-section"><h1>Position Not Found</h1><p>The position link is invalid or has been removed.</p></div></div>';
    return;
  }
  
  const position = POSITIONS[positionKey];
  document.getElementById('positionTitle').textContent = position.name;
  document.getElementById('positionInput').value = positionKey;
  document.title = `Apply for ${position.name} - Steelwool Africa`;
  
  // Handle file upload
  document.getElementById('cvFile').onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5242880) {
        alert('File must be less than 5MB');
        e.target.value = '';
        document.getElementById('fileName').textContent = '';
        return;
      }
      if (file.type !== 'application/pdf') {
        alert('Only PDF files allowed');
        e.target.value = '';
        document.getElementById('fileName').textContent = '';
        return;
      }
      document.getElementById('fileName').textContent = `Selected: ${file.name} (${(file.size / 1048576).toFixed(2)} MB)`;
    }
  };
  
  // Handle form submission
  document.getElementById('applicationForm').onsubmit = async function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submitBtn');
    const loadingDiv = document.getElementById('loadingDiv');
    const msgBox = document.getElementById('messageBox');
    
    btn.disabled = true;
    loadingDiv.style.display = 'block';
    msgBox.style.display = 'none';
    
    try {
      const formData = new FormData(this);
      const data = {};
      
      // Collect form data
      formData.forEach((value, key) => {
        if (key !== 'cvFile') {
          data[key] = value;
        }
      });
      
      // Handle CV file
      const cvFile = document.getElementById('cvFile').files[0];
      if (cvFile) {
        const cvData = await fileToBase64(cvFile);
        data.cvFile = {
          data: cvData,
          mimeType: cvFile.type,
          name: cvFile.name
        };
      }
      
      // Submit to backend
      const response = await fetch(CONFIG.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'submitApplication', data })
      });
      
      const result = await response.json();
      
      loadingDiv.style.display = 'none';
      
      if (result.success) {
        msgBox.className = 'message success';
        msgBox.textContent = result.message || 'Application submitted successfully! You will receive a confirmation email shortly.';
        msgBox.style.display = 'block';
        this.reset();
        document.getElementById('fileName').textContent = '';
        window.scrollTo(0, 0);
        setTimeout(() => btn.disabled = false, 3000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
      
    } catch (error) {
      loadingDiv.style.display = 'none';
      msgBox.className = 'message error';
      msgBox.textContent = `Error: ${error.message}`;
      msgBox.style.display = 'block';
      btn.disabled = false;
    }
    
    return false;
  };
});

// Helper function to convert file to base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
