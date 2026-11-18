// src/components/fleet/FleetEmptyState.jsx

export default function FleetEmptyState({ language = 'en', colSpan = 5, isTable = false }) {
  const message =
    language === 'en'
      ? 'No vessels found matching your filter or search query.'
      : 'Tidak ada kapal yang sesuai dengan filter atau kata kunci pencarian.';

  if (isTable) {
    return (
      <tr>
        <td
          colSpan={colSpan}
          className="px-6 py-12 text-center text-slate-400 text-xs font-mono"
        >
          {message}
        </td>
      </tr>
    );
  }

  return (
    <div className="col-span-full py-12 text-center text-slate-400 text-xs font-mono">
      {message}
    </div>
  );
}
