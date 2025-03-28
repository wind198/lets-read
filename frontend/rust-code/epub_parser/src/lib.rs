use epub::doc::EpubDoc;
use std::io::Cursor;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn extract_text(epub_bytes: &[u8]) -> Result<String, JsValue> {
    let cursor = Cursor::new(epub_bytes.to_vec()); // Wrap in Cursor
    let mut doc = EpubDoc::from_reader(cursor).map_err(|e| JsValue::from_str(&e.to_string()))?;

    let mut content = String::new();

    while let Some(text) = doc.get_current_str().ok() {
        content.push_str(&text);

        if doc.go_next().is_err() {
            break;
        }
    }

    Ok(content)
}
