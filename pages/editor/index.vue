<template>
  <div>
    <h1>JSON Editor</h1>
    <table class="file-table">
      <thead>
        <tr>
          <th>ชื่อไฟล์</th>
          <th>แก้ไขล่าสุด</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files" :key="file.name">
          <td>{{ file.name }}</td>
          <td>{{ file.lastEdit }}</td>
          <td>
            <div class="action-buttons">
              <button class="edit-button" @click="selectFile(file.name)">Edit</button>
              <button class="rename-button" @click="renameFile(file.name)">Rename</button>
              <button class="duplicate-button" @click="duplicateFile(file.name)">Duplicate</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedFile" class="editor-container">
      <div class="header">
        <h2>กำลังแก้ไขไฟล์ [{{ selectedFile }}]</h2>
        <div class="button-group">
          <button class="save-button" @click="openConfirmModal">Save</button>
        </div>
      </div>
      <JsonEditorVue v-bind="attrs" v-model="fileContent" class="jse-theme-dark"></JsonEditorVue>
      <div class="button-group">
        <button class="save-button" @click="openConfirmModal">Save</button>
      </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Confirm Save</h3>
        <p>Are you sure you want to save the changes?</p>
        <button @click="confirmSave" class="confirm-button">Yes, Save</button>
        <button @click="closeConfirmModal" class="cancel-button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const files = ref([]);
const selectedFile = ref("");
const fileContent = ref("");
const showModal = ref(false);
const attrs = useAttrs();

const fetchFiles = async () => {
  const fetchedFiles = await $fetch("/api/files");
  files.value = fetchedFiles.map(file => ({
    name: file.name,
    lastEdit: new Date(file.lastEdit).toLocaleString()
  }));
};

const selectFile = async (file) => {
  selectedFile.value = file;
  const content = await $fetch(
    `/api/file/${encodeURIComponent(file.replace(".json", ""))}`
  );
  fileContent.value = JSON.stringify(content, null, 2);
};

const openConfirmModal = () => {
  showModal.value = true;
};

const closeConfirmModal = () => {
  showModal.value = false;
};

const confirmSave = async () => {
  closeConfirmModal();
  try {
    const parsedContent = JSON.parse(fileContent.value);
    await $fetch("/api/file/save", {
      method: "POST",
      body: {
        name: selectedFile.value.replace(".json", ""),
        content: parsedContent,
      },
    });
    alert("File saved successfully");
  } catch (error) {
    console.error("Error saving file:", error);
    alert(
      "Invalid JSON format or failed to save. Please fix any errors and try again."
    );
  }
};

const editFile = () => {
  // Add your edit logic here
  alert("Edit button clicked");
};

onMounted(fetchFiles);
</script>

<style scoped>
.file-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.file-table th, .file-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

/* .file-table th {
  background-color: #f2f2f2;
  font-weight: bold;
} */

/* .file-table tr:nth-child(even) {
  background-color: #f9f9f9;
} */

.file-table tr:hover {
  background-color: #ddd;
  color: black;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.edit-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #45a049;
}

.rename-button {
  background-color: #ff9800; /* Orange */
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.rename-button:hover {
  background-color: #fb8c00;
}

.duplicate-button {
  background-color: #2196f3; /* Blue */
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.duplicate-button:hover {
  background-color: #1976d2;
}

.save-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #45a049;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.editor-container {
  margin-top: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.confirm-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.confirm-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #f44336; /* Red */
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.cancel-button:hover {
  background-color: #e53935;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>