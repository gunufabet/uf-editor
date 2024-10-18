<template>
  <div>
    <h1>JSON Editor</h1>
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files" :key="file">
          <td>
            <button style="color: white" @click="selectFile(file)">
              {{ file }}
            </button>
          </td>
          <td>
            <button
              style="margin-left: 10px; color: white; background-color: #ff9800"
              @click="renameFile(file)"
            >
              Rename
            </button>
            <button
              style="margin-left: 10px; color: white; background-color: #2196f3"
              @click="duplicateFile(file)"
            >
              Duplicate
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedFile">
      <h2>{{ selectedFile }}</h2>
      <button class="save-button" @click="openConfirmModal">Save</button>
      <JsonEditorVue
        v-model="fileContent"
        :options="jsonEditorOptions"
        class="jse-theme-dark"
      ></JsonEditorVue>
      <button class="save-button" @click="openConfirmModal">Save</button>
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
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

const files = ref([]);
const selectedFile = ref("");
const fileContent = ref();
const showModal = ref(false);

const jsonEditorOptions = ref({
  mode: "code",
});

const fetchFiles = async () => {
  files.value = await $fetch("/api/files");
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

const duplicateFile = async (file) => {
  const newFileName = prompt(
    "Enter new filename",
    `${file.replace(".json", "")}_copy.json`
  );
  if (newFileName && newFileName.trim() !== "") {
    try {
      const content = await $fetch(
        `/api/file/${encodeURIComponent(file.replace(".json", ""))}`
      );
      await $fetch("/api/file/save", {
        method: "POST",
        body: {
          name: file.replace(".json", ""),
          content: content,
          duplicate: newFileName.replace(".json", ""),
        },
      });
      alert("File duplicated successfully");
      fetchFiles();
    } catch (error) {
      console.error("Error duplicating file:", error);
      alert("Failed to duplicate file. Please try again.");
    }
  } else {
    alert("Invalid file name. Please try again.");
  }
};

const renameFile = async (file) => {
  const newName = prompt("Enter new name for the file:", file);
  if (newName && newName.trim() !== "") {
    try {
      await $fetch("/api/file/rename", {
        method: "POST",
        body: {
          oldName: file.replace(".json", ""),
          newName: newName.replace(".json", ""),
        },
      });
      alert("File renamed successfully");
      fetchFiles();
      if (selectedFile.value === file) {
        selectedFile.value = newName;
      }
    } catch (error) {
      console.error("Error renaming file:", error);
      alert("Failed to rename file. Please try again.");
    }
  } else {
    alert("Invalid file name. Please try again.");
  }
};

onMounted(fetchFiles);
</script>

<style scoped>
.save-button {
  background-color: #4caf50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #45a049;
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
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.confirm-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 8px;
}

.cancel-button {
  background-color: #f44336; /* Red */
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 8px;
}

.confirm-button:hover {
  background-color: #45a049;
}

.cancel-button:hover {
  background-color: #e53935;
}
</style>
