// utils/mediaUtils.js

// Function to format date
export const formatDate = (date) => new Date(date).toLocaleString();

// Function to render email
export const renderEmail = (email) => <p>Email: {email}</p>;

// Function to render JSON data
export const renderJson = (json) => <p>JSON Data: {JSON.stringify(json)}</p>;

// Function to render password (if applicable)
export const renderPassword = (pass) => pass ? <p>Password: {pass}</p> : null;

// Function to render media files
export const renderMediaFiles = (mediaFiles) => {
  if (!mediaFiles || !mediaFiles.data) return null;

  return mediaFiles.data.map((file) => (
    <div key={file.id} style={{ marginTop: '16px' }}>
      <h3>File: {file.attributes.name}</h3>
      {file.attributes.mime && file.attributes.mime.startsWith('image/') ? (
        <img
          src={`http://localhost:1337${file.attributes.url}`}
          alt={file.attributes.alternativeText || file.attributes.name}
          width="300"
          style={{ display: 'block', margin: 'auto' }}
        />
      ) : (
        <a
          href={`http://localhost:1337${file.attributes.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {file.attributes.name}
        </a>
      )}
    </div>
  ));
};

// Function to render attributes(just to test)
// export const renderAttributes = ({ title, mail, json, pass }) => (
//   <div>
//     <h2>{title}</h2>
//     {renderEmail(mail)}
//     {renderJson(json)}
//     {renderPassword(pass)}
//   </div>
// );

// Function to render body content
export const renderBodyContent = (body) => {
  if (!Array.isArray(body)) return null;

  return body.map((item, index) => {
    if (item.type === 'paragraph') {
      return (
        <p key={index}>
          {item.children.map((child, childIndex) =>
            child.type === 'text' ? child.text : null
          ).join(' ')}
        </p>
      );
    }
    return null;
  });
};

export const rendermarkDown=()=>{

}

