export const Carat = ({ fill = "#fff", ...props }) => {
  return (
    <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M840.52 60.449c-5.438 0-10.539 1.914-14.738 6.148l-455.51 456.41c-42.602 42.637-42.602 111.45-.074 154.01l455.59 456.41c4.164 4.2 9.375 6.149 14.812 6.149 5.398 0 10.574-1.875 14.812-6.149v-.074c8.437-8.398 8.398-21.227 0-29.625l-455.44-456.41c-25.914-25.949-25.914-68.664.074-94.648l455.36-456.34c8.398-8.398 8.398-21.3 0-29.699-4.2-4.199-9.45-6.148-14.887-6.148z"
        fill={fill}
      />
    </svg>
  );
};
