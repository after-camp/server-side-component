'use client';

export default function SearchBox({search: initialSearch}) {
    function onChange(e) {
        window.router.navigate(`?search=${e.target.value}`);
    }

    return (
        <input
            className="border-2 border-slate-500"
            type="text"
            defaultValue={initialSearch}
            onChange={onChange}
        />
    );
}
