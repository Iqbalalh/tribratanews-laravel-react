export default function RichTextDisplay({ content }) {
    return (
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    );
  }
