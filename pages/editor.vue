<template>
  <div>
    <h1>JSON Editor</h1>
    <ul>
      <li v-for="file in files" :key="file">
        <button style="color: white" @click="selectFile(file)">
          {{ file }}
        </button>
      </li>
    </ul>
    <div v-if="selectedFile">
      <h2>{{ selectedFile }}</h2>
      <JsonEditorVue
        v-model="fileContent"
        :options="jsonEditorOptions"
      ></JsonEditorVue>
      <button class="save-button" @click="saveFile">Save</button>
    </div>
  </div>
</template>

<script setup>
import JsonEditorVue from "json-editor-vue";
import { ref, onMounted } from "vue";

const files = ref([]);
const selectedFile = ref("");
const fileContent = ref("");
const jsonEditorOptions = ref({
  mode: "code",
});

const fetchFiles = async () => {
  files.value = await $fetch("/api/files");
};

const selectFile = async (file) => {
  selectedFile.value = file;
  const content = await $fetch(`/api/file/${file.replace(".json", "")}`);
  fileContent.value = JSON.stringify(content, null, 2);
};

const saveFile = async () => {
  await $fetch("/api/file/save", {
    method: "POST",
    body: {
      name: selectedFile.value.replace(".json", ""),
      content: JSON.parse(fileContent.value),
    },
  });
  alert("File saved successfully");
};

onMounted(fetchFiles);
</script>

<style scoped>
.save-button {
  background-color: #4caf50; /* Green */
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
</style>
